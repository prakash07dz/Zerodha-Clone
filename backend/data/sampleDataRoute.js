// app.get("/addHoldings", async (req, res) => {
//     holdings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save();
//     });
//     res.send("Holdings data added sucessfully!");
// });

// app.get("/addPositions", async (req, res) => {
//     positions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();
//     });
//     res.send("Positions data added sucessfully!");
// });
