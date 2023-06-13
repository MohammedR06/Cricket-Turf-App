import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg" id="navbar-header">
      <div className="container">
        <Link className="nav-link active" aria-current="page" to="/">
          <img src={logo} alt="" height={50} />
          <span className="fs-4 ms-2 txt">Masti Box Cricket</span>
        </Link>

        <button
          id="nav-toggle-button"
          className="navbar-toggler custom-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse justify-content-end collapse"
          id="navbarSupportedContent"
        >
          <ul id="navbar-links" className="navbar-nav px-1">
            <li className="nav-item px-2">
              <Link className="nav-link links  " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                className="nav-link links  "
                aria-current="page"
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item px-2 ">
              <Link
                className="nav-link links  "
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                className="nav-link links  "
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
