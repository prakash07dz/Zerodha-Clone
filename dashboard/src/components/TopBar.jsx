import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 py-2">
      <div className="container-fluid d-flex justify-content-start align-items-center">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ width: "40px" }} 
          />
        </a>

        {/* Market Indices */}
        <div className="d-flex align-items-center gap-4">
          <div className="text-center">
            <p className="mb-0 fw-bold">NIFTY 50</p>
            <p className="mb-0 text-success">100.2</p>
          </div>
          <div className="text-center">
            <p className="mb-0 fw-bold">SENSEX</p>
            <p className="mb-0 text-danger">100.2</p>
          </div>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Collapsible Menu */}
      <div className="collapse navbar-collapse mt-2" id="navbarMenu">
        <Menu />
      </div>
    </nav>
  );
};

export default TopBar;
