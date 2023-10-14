import React from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div classNameName="container" id="stickyTop">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to='/'>
            <img src={logo} alt=""/>
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                 to='/'
                  aria-current="page"
                >
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/course'>
                  Course
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to='/contact'>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
