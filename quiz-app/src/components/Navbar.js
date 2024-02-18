import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow ">
      <div className="container-fluid">
      
          <a className="navbar-brand ms-5 text-style"  >
            <Link to={'/'}>
            QuizVerse</Link>
          </a>
     
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
            <Link to={'/about-us'}>
            About</Link>
            </a>
           
          </li>
          <li className="nav-item p-3">
            <a className="nav-link"  href="#link">
            <Link to={'/contact-us'}>
            Contact Us</Link>
            </a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link" href="#link">
            <Link to={'/log-in'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(5, 109, 97)" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
