const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const request = require("supertest");
const { app, server } = require("../index");
const User = require("../models/UserModel");
const authMiddleware = require("../middlewares/authMiddleware");

jest.mock("jsonwebtoken");
jest.mock("../models/UserModel");

describe("Auth Middleware", () => {
    const mockUser = {
        _id: new mongoose.Types.ObjectId().toString(),
        username: "Test User",
        email: "testuser@example.com"
    };

    //  Test 1: Access denied if no token is provided
    it("should return 401 if no token is provided", async () => {
        const req = { header: jest.fn().mockReturnValue(undefined) };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const next = jest.fn();

        await authMiddleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ error: "Access denied. No token provided." });
        expect(next).not.toHaveBeenCalled();
    });

    //  Test 2: Return 400 if token is invalid
    it("should return 400 if token is invalid", async () => {
        jwt.verify.mockImplementation(() => {
            throw new Error("Invalid token");
        });

        const req = { header: jest.fn().mockReturnValue("Bearer invalid_token") };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const next = jest.fn();

        await authMiddleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "Invalid token." });
        expect(next).not.toHaveBeenCalled();
    });

    //  Test 3: Return 404 if user is not found
    it("should return 404 if user is not found", async () => {
        jwt.verify.mockReturnValue({ userId: mockUser._id });

        User.findById.mockResolvedValue(null); // Simulate user not found

        const req = { header: jest.fn().mockReturnValue("Bearer valid_token") };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const next = jest.fn();

        await authMiddleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: "User not found." });
        expect(next).not.toHaveBeenCalled();
    });

    //  Test 4: Successful authentication
    it("should call next() and attach user to request object on success", async () => {
        jwt.verify.mockReturnValue({ userId: mockUser._id });

        User.findById.mockResolvedValue(mockUser);

        const req = { header: jest.fn().mockReturnValue("Bearer valid_token") };
        const res = {};
        const next = jest.fn();

        await authMiddleware(req, res, next);

        expect(req.user).toEqual(mockUser);
        expect(next).toHaveBeenCalled();
    });

    afterAll(async () => {
        await mongoose.connection.close();
        await server.close();
    });
});
