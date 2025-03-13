const HoldingsModel = require("../models/HoldingsModel");
const OrdersModel = require("../models/OrdersModel");
const PositionsModel = require("../models/PositionsModel");

const holdingsController = async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
}

const positionsController = async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
}

const ordersController = async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;
        if (!name || !qty || !price || !mode) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const newOrder = new OrdersModel({
            name,
            qty,
            price,
            mode,
            date: new Date(),
        });

        // Save to database
        await newOrder.save();
        res.status(201).json({ success: true, message: "Order placed successfully!", order: newOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error placing order", error: error.message });
    }
}

const getAllOrdersController = async (req, res) => {
    try {
        const orders = await OrdersModel.find().sort({ date: -1 });
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching orders", error: error.message });
    }
}

module.exports = { holdingsController, positionsController, ordersController, getAllOrdersController }