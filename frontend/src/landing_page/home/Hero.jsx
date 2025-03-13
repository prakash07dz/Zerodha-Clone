import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div data-testid="hero" className="container p-3 p-md-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <img
            src="images/homeHero.png"
            className="img-fluid mb-5"
            alt="Hero Image"
          />
        </div>
        <div className="col-12">
          <h1 className="mt-3 mt-md-5">Invest in everything</h1>
          <p className="lead">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <Link to="/signup" className="btn btn-primary btn-lg w-50 w-md-25">
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
