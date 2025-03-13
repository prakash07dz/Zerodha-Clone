import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${backendUrl}/allOrders`);
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders(); // Fetch orders when component loads
  }, []);

  return (
    <div className="orders-section">
      <h3 className="orders-title">Your Orders</h3>

      {/* Show message if no orders */}
      {orders.length === 0 ? (
        <div className="no-orders">📢 You haven't placed any orders yet.</div>
      ) : (
        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price.toFixed(2)}</td>
                  <td className={order.mode === "BUY" ? "buy" : "sell"}>
                    {order.mode}
                  </td>
                  <td>{new Date(order.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
