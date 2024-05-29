import { Link } from "react-router-dom";
import React from "react";


export function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="mindwalk-text navbar-brand" to="/">
                Mind Walk
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-centered" to="/stress-relief">Stress</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-centered" to="/pressure-management">Pressure</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-centered" to="/positive-self-image">Self-Image</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/get-started">Get Started</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
