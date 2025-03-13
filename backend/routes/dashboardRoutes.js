const express = require("express");
const { holdingsController, positionsController, ordersController, getAllOrdersController } = require("../controllers/dashboardControllers");
const router = express.Router();

router.get("/allHoldings", holdingsController);

router.get("/allPositions", positionsController);

router.get("/allOrders", getAllOrdersController);

router.post("/newOrder", ordersController);

module.exports = router;