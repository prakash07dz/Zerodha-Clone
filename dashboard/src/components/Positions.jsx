import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backendUrl}/allPositions`)
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.log(
          "An error occurred while fetching positions data from DB: ",
          err
        );
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = (stock.price || 0) * (stock.qty || 0);
              const isProfit =
                curValue - (stock.avg || 0) * (stock.qty || 0) >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{(stock.avg || 0).toFixed(2)}</td>
                  <td>{(stock.price || 0).toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - (stock.avg || 0) * (stock.qty || 0)).toFixed(
                      2
                    )}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
