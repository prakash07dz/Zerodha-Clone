const request = require("supertest");
const mongoose = require("mongoose");
const { app, server } = require("../index");
const HoldingsModel = require("../models/HoldingsModel");
const PositionsModel = require("../models/PositionsModel");
const OrdersModel = require("../models/OrdersModel");

jest.setTimeout(30000); // For longer test executions

beforeAll(async () => {
    await HoldingsModel.create([{ name: "Apple Inc.", qty: 50 }]);
    await PositionsModel.create([{ product: "Stocks", name: "Google", qty: 20 }]);
    await OrdersModel.create([{ name: "Test Order", qty: 10, price: 100, mode: "BUY" }]);
});

afterEach(async () => {
    await OrdersModel.deleteMany(); // Clear orders to avoid data leakage
});

afterAll(async () => {
    await mongoose.connection.close();
    await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for server termination
    await server.close();
});

describe("Dashboard Routes", () => {
    //  Test 1: GET /allHoldings
    it("should return all holdings", async () => {
        const response = await request(app).get("/allHoldings");

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body[0]).toHaveProperty("name", "Apple Inc.");
    });

    //  Test 2: GET /allPositions
    it("should return all positions", async () => {
        const response = await request(app).get("/allPositions");

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body[0]).toHaveProperty("name", "Google");
    });

    //  Test 3: GET /allOrders
    it("should return all orders", async () => {
        await OrdersModel.create({
            name: "Test Order",
            qty: 2,
            price: 500,
            mode: "BUY"
        });

        const response = await request(app).get("/allOrders");

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.orders.length).toBeGreaterThan(0);
        expect(response.body.orders[0]).toHaveProperty("name", "Test Order");
    });

    //  Test 4: POST /newOrder - Successful Order Placement
    it("should return 400 if required fields are missing", async () => {
        const response = await request(app)
            .post("/newOrder")
            .send({ name: "Incomplete Order" });

        expect(response.statusCode).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("All fields are required");
    });

    //  Test 5: POST /newOrder - Missing Required Fields
    it("should return 400 if required fields are missing", async () => {
        const response = await request(app)
            .post("/newOrder")
            .send({ name: "Incomplete Order" });

        expect(response.statusCode).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("All fields are required");
    });

    //  Test 6: Error Handling for /newOrder Route
    it("should return 500 if there’s a server error in /newOrder", async () => {
        jest.spyOn(OrdersModel.prototype, "save").mockImplementationOnce(() => {
            throw new Error("Database Error");
        });

        const response = await request(app)
            .post("/newOrder")
            .send({
                name: "Invalid Order",
                qty: 5,
                price: 1500,
                mode: "BUY"
            });

        expect(response.statusCode).toBe(500);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Error placing order");
    });
});
