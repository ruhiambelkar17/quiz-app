import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow ">
      <div className="container-fluid">
        <Link to="/">
          <p className="navbar-brand ms-5 text-style">QuizVerse</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav justify-content-end me-5">
          <li className="nav-item p-3">
            <a className="nav-link" href="#link">
              Sources
            </a>
          </li>

          <li className="nav-item p-3">
            <a className="nav-link" href="#link">
              About
            </a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link" href="#link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
