import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-nav navbar-expand bg-dark">
      <Link to="/" className="navbar-brand text-danger ml-4">
        Guitars shop
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link text-light">
            Guitars
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="btn btn-outline-danger text-light">
            Your Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
