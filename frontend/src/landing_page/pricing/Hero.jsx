import React from "react";

const Hero = () => {
  return (
    <div className="container">
      {/* Title Section */}
      <div className="row p-3 p-md-4 mt-3 mt-md-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-4 fs-md-3">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Cards Section */}
      <div className="row p-3 p-md-4 mt-3 mt-md-5 text-center">
        {/* Card 1: Free Equity Delivery */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <img
            src="images/pricingEquity.svg"
            alt="Free Equity Delivery"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
          <h1 className="fs-3 mt-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        {/* Card 2: Intraday and F&O Trades */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <img
            src="images/intradayTrades.svg"
            alt="Intraday and F&O Trades"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
          <h1 className="fs-3 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Card 3: Free Direct MF */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <img
            src="images/pricingEquity.svg"
            alt="Free Direct MF"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
          <h1 className="fs-3 mt-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
