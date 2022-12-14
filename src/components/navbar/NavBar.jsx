import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavBar() {
  return (
    <div className="container-fluid bg-dark">
      <nav className="navbar navbar-expand-sm navbar-dark  ">
        <div className="container">
          <NavLink className="navbar-brand" to="/react-work">
            {" "}
            <img
              id="logo"
              src="https://aguilar.digital/wp-content/uploads/2022/01/logo-aguilar.png"
              alt="Logo de la app"
            />
          </NavLink>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item boton  active">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/react-work"
                >
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item boton  active">
                <NavLink className="nav-link" to="react-work/contador">
                  Contador <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item boton  active">
                <NavLink className="nav-link" to="react-work/calculadora">
                  Calculadora<span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item boton  active">
                <NavLink className="nav-link" to="react-work/yugicards">
                  YugiCards<span className="visually-hidden">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item boton  dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                >
                  Mas apps
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink
                    className="dropdown-item"
                    to="/react-work/piedrapapeltijera"
                  >
                    Piedra papel y tijera
                  </NavLink>
                  <NavLink className="dropdown-item" to="/react-work/tasklist">
                    TaskList
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
