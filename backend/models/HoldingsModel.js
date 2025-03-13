const mongoose = require("mongoose");
const schema = mongoose.Schema;

const HoldingsSchema = new schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String
});

const HoldingsModel = mongoose.model("Holdings", HoldingsSchema);
module.exports = HoldingsModel;