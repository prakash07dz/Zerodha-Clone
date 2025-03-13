const mongoose = require("mongoose");
const schema = mongoose.Schema;

const OrdersSchema = new schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    date: { type: Date, default: Date.now },
});

const OrdersModel = mongoose.model("Order", OrdersSchema);
module.exports = OrdersModel;