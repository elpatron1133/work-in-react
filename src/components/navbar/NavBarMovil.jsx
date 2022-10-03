import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";

export default function NavBarMovil() {
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              className="img-logo"
              src="https://aguilar.digital/wp-content/uploads/2022/01/logo-aguilar.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                <NavLink
                  type="button"
                  aria-current="page"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className="nav-link"
                  to="/react-work/"
                >
                  Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                  type="button"
                  aria-current="page"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className="nav-link"
                  to="/react-work/contador"
                >
                  contador
                </NavLink>
                </li>

                <NavLink
                  type="button"
                  aria-current="page"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className="nav-link"
                  to="/react-work/calculadora"
                >
                  Calculadora
                </NavLink>
                <NavLink
                  type="button"
                  aria-current="page"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className="nav-link"
                  to="/react-work/yugicards"
                >
                  YugiFindCards
                </NavLink>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Vanilla Javascript
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        type="button"
                        aria-current="page"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="dropdown-item"
                        to="/react-work/piedrapapeltijera"
                      >
                        Piedra papel y tijera
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        type="button"
                        aria-current="page"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="dropdown-item"
                        to="#"
                      >
                        Another action
                      </NavLink>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink
                        type="button"
                        aria-current="page"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="dropdown-item"
                        to="#"
                      >
                        Something else here
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
