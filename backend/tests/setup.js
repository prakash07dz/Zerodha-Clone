const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

beforeAll(async () => {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }

    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);

    console.log("✅ MongoDB In-Memory Server started");
});

afterAll(async () => {
    if (mongoose.connection.readyState !== 0) {
        try {
            await mongoose.connection.db.dropDatabase(); // 🛠️ Ensure DB is connected
            await mongoose.connection.close();
            await mongoServer.stop();
            console.log("✅ MongoDB In-Memory Server stopped");
        } catch (error) {
            console.error("Error during test cleanup:", error);
        }
    }
});
