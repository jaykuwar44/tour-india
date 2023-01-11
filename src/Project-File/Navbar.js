import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container  " id="home">
        <nav class="navbar fixed-top navbar-expand-lg">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Tourist</a> */}
            <img src={require('./Images/tour.png')} alt="logo" width="120" height="50" className="d-inline-block align-text-top" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <a href="#place">Place</a>
                </li>
                <li class="nav-item">
                  <a href="#service">Service</a>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
