import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <div className="container-fluid bg-dark">
      <nav className="navbar navbar-expand-sm navbar-dark  ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            {" "}
            <img
              id="logo"
              src="https://aguilar.digital/wp-content/uploads/2022/01/logo-aguilar.png"
            />
          </NavLink>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/"
                >
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="contador">
                  Contador <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="calculadora">
                  Calculadora<span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link" to="yugicards">
                  YugiCards
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
