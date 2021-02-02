import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  const inCart = useSelector((state) => state.guitars.inCart);

  return (
    <Navbar bg="dark" variant="dark">
      <h4 className="text-light brand">Guitars shop</h4>
      <Nav className="mx-auto">
        <NavLink to="/" exact className="text-light nav">
          Home
        </NavLink>
        <NavLink to="/guitars" className="text-light ml-2 nav">
          Guitars
        </NavLink>
        <NavLink to="/bass" className="text-light ml-2 nav">
          Bass
        </NavLink>
        <NavLink to="/strings" className="text-light ml-2 nav">
          Strings
        </NavLink>
      </Nav>
      <NavLink to="/cart" className="float-right">
        <div>
          <FaCartArrowDown className="cartTop" />
          <Badge pill variant="danger">
            {inCart.length}
          </Badge>
        </div>
      </NavLink>
    </Navbar>
  );
}

export default Header;
