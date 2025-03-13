const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PositionsSchema = new schema({
    product: String,
    name: String,
    qty: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const PositionsModel = mongoose.model("Position", PositionsSchema);
module.exports = PositionsModel;