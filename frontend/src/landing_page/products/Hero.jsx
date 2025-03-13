import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom mb-3 mb-md-5">
      <div className="text-center mt-3 mt-md-5 p-3">
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 fs-4 fs-md-3">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-3 mb-md-5">
          Check out our{" "}
          <a href="#" className="text-decoration-none">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
