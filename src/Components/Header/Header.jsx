import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg navbarContainer">
        <div className="container-fluid" style={{ padding: "unset" }}>
          <a className="navbar-brand" href="#">
            PortFolio<span className="dot">.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menuItems">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Skill
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <button className="btn contactMeBtn">Contact Me</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
