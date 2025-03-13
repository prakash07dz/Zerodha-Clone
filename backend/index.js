require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes")

const port = process.env.PORT || Math.floor(Math.random() * (5000 - 3000) + 3000);;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV !== "test") {
    mongoose.connect(uri).then(() => {
        console.log("Database connected successfully.")
    }).catch((err) => {
        console.log("An error accured while connecting database: ", err)
    });
}

app.use("/auth", authRoutes);
app.use("/", dashboardRoutes);

const server = app.listen(port, () => {
    console.log(`Server is listning at port ${port}`);
});

module.exports = { app, server }