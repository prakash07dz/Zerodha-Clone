import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, updateOrders, closeBuyWindow }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("");

  const { closeBuyWindow: contextCloseBuyWindow } = useContext(GeneralContext);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleBuyClick = async () => {
    try {
      const response = await axios.post(`${backendUrl}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      if (response.status === 201) {
        alert("Order placed successfully!");

        if (updateOrders) updateOrders();
        if (closeBuyWindow) closeBuyWindow();
        else if (contextCloseBuyWindow) contextCloseBuyWindow();
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order.");
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button
            className="btn btn-grey"
            onClick={() => {
              if (closeBuyWindow) closeBuyWindow();
              else if (contextCloseBuyWindow) contextCloseBuyWindow();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
