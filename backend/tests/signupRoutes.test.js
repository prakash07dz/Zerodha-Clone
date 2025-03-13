const request = require("supertest");
const mongoose = require("mongoose");
const { app, server } = require("../index");
const User = require("../models/UserModel");

jest.setTimeout(30000);

beforeEach(async () => {
    if (mongoose.connection.readyState === 1) {
        await User.deleteMany();
    } else {
        console.warn("Skipping deleteMany - Database not connected!");
    }
});

describe("User Authentication", () => {
    afterAll(async () => {
        await User.deleteMany();
        await mongoose.connection.close();
        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for server termination
        await server.close();
    });

    it("should register a user successfully", async () => {
        const response = await request(app)
            .post("/auth/signup")
            .send({
                username: "Test User",
                email: "testuser@example.com",
                password: "Test@1234"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("message", "User created successfully!");
    });

    it("should not allow duplicate email registration", async () => {
        const userData = {
            username: "Test User",
            email: "test@example.com",
            password: "password123",
        };

        await request(app).post("/auth/signup").send(userData);
        const response = await request(app).post("/auth/signup").send(userData);

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Email already in use");
    });
});
