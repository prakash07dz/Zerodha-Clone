import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Support Portal Section */}
      <div className="p-3 p-md-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#" className="text-decoration-none">
          Track Tickets
        </a>
      </div>

      {/* Main Content Section */}
      <div className="row p-3 p-md-5 m-0 m-md-3">
        {/* Left Column: Search and Links */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
          />
          <div className="d-flex flex-wrap gap-2">
            <a href="#" className="text-decoration-none">
              Track account opening
            </a>
            <a href="#" className="text-decoration-none">
              Track segment activation
            </a>
            <a href="#" className="text-decoration-none">
              Intraday margins
            </a>
            <a href="#" className="text-decoration-none">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Column: Featured Links */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;