import React from "react";

const Team = () => {
  return (
    <div className="container">
      {/* Team Title Section */}
      <div className="row p-3 p-md-5 mt-3 mt-md-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      {/* Team Member Section */}
      <div
        className="row p-3 p-md-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* Image and Name Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{ width: "50%", maxWidth: "200px" }}
          />
          <h4 className="mt-3 mt-md-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Description Section */}
        <div className="col-12 col-md-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none">
              Homepage
            </a>{" "}
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
