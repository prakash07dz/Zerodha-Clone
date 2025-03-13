import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 gap-3">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row gap-3 w-100">
        {["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"].map(
          (item, index) => (
            <li key={index} className="nav-item text-center">
              <Link
                to={`/${item.toLowerCase()}`}
                className={`nav-link ${selectMenu === index ? "active fw-bold" : ""}`}
                onClick={() => handleMenuClick(index)}
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Profile Section */}
      <div className="dropdown">
        <div
          className="d-flex align-items-center cursor-pointer"
          onClick={toggleProfileDropdown}
        >
          <div
            className="avatar bg-primary text-white rounded-circle p-2 d-flex justify-content-center align-items-center"
            style={{ width: "35px", height: "35px", fontSize: "14px" }}
          >
            ZU
          </div>
          <p className="ms-2 mb-0 fw-bold">USERID</p>
        </div>
        {isProfileDropdownOpen && (
          <ul className="dropdown-menu show position-absolute">
            <li>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-danger" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
