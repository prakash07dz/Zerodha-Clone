import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow"; 

const Dashboard = () => {
  const [reloadOrders, setReloadOrders] = useState(false);
  const [showBuyWindow, setShowBuyWindow] = useState(false);

  const updateOrders = () => {
    setReloadOrders((prev) => !prev);
  };

  const closeBuyWindow = () => {
    setShowBuyWindow(false);
  };

  return (
    <div className="dashboard-container" data-testid="dashboard-container">
      <GeneralContextProvider>
        <WatchList data-testid="watchlist" />
      </GeneralContextProvider>
      <div className="content" data-testid="dashboard-content">
        {/*  Conditionally render BuyActionWindow */}
        {showBuyWindow && (
          <BuyActionWindow
            uid="AAPL"
            updateOrders={updateOrders}
            closeBuyWindow={closeBuyWindow}
          />
        )}

        <Routes>
          <Route
            exact
            path="/dashboard"
            element={<Summary data-testid="summary" />}
          />
          <Route
            path="/orders"
            element={<Orders data-testid="orders" key={reloadOrders} />}
          />
          <Route
            path="/holdings"
            element={<Holdings data-testid="holdings" />}
          />
          <Route
            path="/positions"
            element={<Positions data-testid="positions" />}
          />
          <Route path="/funds" element={<Funds data-testid="funds" />} />
          <Route path="/apps" element={<Apps data-testid="apps" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
