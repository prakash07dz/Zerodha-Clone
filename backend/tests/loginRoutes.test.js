const request = require("supertest");
const mongoose = require("mongoose");
const { app, server } = require("../index");
const UserModel = require("../models/UserModel");

const testUser = {
    username: "Test User",
    email: "testuser@example.com",
    password: "Test@1234"
};

beforeAll(async () => {
    await UserModel.create(testUser);
});

afterEach(async () => {
    await UserModel.deleteMany(); // Ensure each test runs with a clean database
});

afterAll(async () => {
    await mongoose.connection.close();
    await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for server termination
    await server.close();
});

describe("User Login", () => {
    it("should log in successfully with correct credentials", async () => {
        const response = await request(app)
            .post("/auth/login")
            .send({ email: testUser.email, password: testUser.password });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("token");
    });

    it("should fail to log in with incorrect email", async () => {
        const response = await request(app)
            .post("/auth/login")
            .send({ email: "wrongemail@example.com", password: testUser.password });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Invalid credentials");
    });

    it("should fail to log in with incorrect password", async () => {
        const response = await request(app)
            .post("/auth/login")
            .send({ email: testUser.email, password: "WrongPassword" });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Invalid credentials");
    });

    it("should return 400 if email or password is missing", async () => {
        const response = await request(app)
            .post("/auth/login")
            .send({ email: testUser.email });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Invalid credentials");
    });

    it("should handle server errors gracefully", async () => {
        jest.spyOn(UserModel, "findOne").mockImplementation(() => {
            throw new Error("Database error");
        });

        const response = await request(app)
            .post("/auth/login")
            .send({ email: testUser.email, password: testUser.password });

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe("err.message");
    });
});
