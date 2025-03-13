import React from "react";

const OpenAccount = () => {
  return (
    <div data-testid="open-account" className="container p-3 p-md-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-3 mt-md-5 mb-4">Open a Zerodha account</h1>
        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-lg w-50 w-md-25">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
