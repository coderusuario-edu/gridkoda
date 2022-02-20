import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-gk-gradient">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="GridKoda" width="15%" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    to="/category/mas-comprados"
                                    className="nav-link"
                                >
                                    Más comprados
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/category/sale"
                                    className="nav-link"
                                >
                                    Promociones
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
