import React from "react";

const Universe = () => {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row text-center">
        {/* Heading Section */}
        <h1 className="fs-2 fs-md-1">The Zerodha Universe</h1>
        <p className="fs-5 fs-md-4 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Partner Platforms Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-3 p-md-5">
          {/* Zerodha Fundhouse */}
          <div className="col">
            <div className="card h-100 p-3">
              <img
                src="images/zerodhaFundhouse.png"
                alt="Zerodha Fundhouse"
                className="img-fluid mx-auto mb-3"
                style={{ width: "50%" }}
              />
              <p className="text-small text-muted">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
          </div>

          {/* Sensibull */}
          <div className="col">
            <div className="card h-100 p-3">
              <img
                src="images/sensibullLogo.svg"
                alt="Sensibull"
                className="img-fluid mx-auto mb-3"
                style={{ width: "50%" }}
              />
              <p className="text-small text-muted">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
          </div>

          {/* GoldenPi */}
          <div className="col">
            <div className="card h-100 p-3">
              <img
                src="images/goldenpiLogo.png"
                alt="GoldenPi"
                className="img-fluid mx-auto mb-3"
                style={{ width: "50%" }}
              />
              <p className="text-small text-muted">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </div>
          </div>

          {/* Streak */}
          <div className="col">
            <div className="card h-100 p-3">
              <img
                src="images/streakLogo.png"
                alt="Streak"
                className="img-fluid mx-auto mb-3"
                style={{ width: "50%" }}
              />
              <p className="text-small text-muted">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
          </div>

          {/* Smallcase */}
          <div className="col">
            <div className="card h-100 p-3">
              <img
                src="images/smallcaseLogo.png"
                alt="Smallcase"
                className="img-fluid mx-auto mb-3"
                style={{ width: "50%" }}
              />
              <p className="text-small text-muted">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
          </div>

          {/* Ditto */}
          <div className="col">
            <div className="card h-100 p-3">
              <img
                src="images/dittoLogo.png"
                alt="Ditto"
                className="img-fluid mx-auto mb-3"
                style={{ width: "40%" }}
              />
              <p className="text-small text-muted">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>
        </div>

        {/* Signup Button */}
        <div className="d-flex justify-content-center mt-3 mt-md-5 mb-3 mb-md-5">
          <button
            className="btn btn-primary fs-5 p-2"
            style={{ width: "200px" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
