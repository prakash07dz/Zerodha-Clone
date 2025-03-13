import React from "react";

const Education = () => {
  return (
    <div data-testid="education" className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 text-center text-md-start">
          <img
            src="images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none">
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="text-decoration-none">
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
