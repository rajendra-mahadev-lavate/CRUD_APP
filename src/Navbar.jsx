import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-light fw-bold text-center">
        <NavLink className="navbar-brand">
          <h2 className="text-warning fw-bold">CRUD APP</h2>
        </NavLink>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light fw-bold mx-5" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light fw-bold mx-5"
                to="/userData"
              >
                UserData
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
