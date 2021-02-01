import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  const inCart = useSelector((state) => state.guitars.inCart);

  return (
    <Navbar bg="dark" variant="dark">
      <h4 className="text-light">Guitars shop</h4>
      <Nav className="mx-auto">
        <NavLink to="/" exact className="text-light nav">
          Home
        </NavLink>
        <NavLink to="/acoustic" className="text-light ml-2 nav">
          Acoustic
        </NavLink>
        <NavLink to="/electric" className="text-light ml-2 nav">
          Electric
        </NavLink>
      </Nav>
      <NavLink to="/cart" className="float-right">
        <div>
          <FaCartArrowDown
            style={{
              color: "white",
              width: "30px",
              height: "35px",
            }}
          />
          <Badge pill variant="danger">
            {inCart.length}
          </Badge>
        </div>
      </NavLink>
    </Navbar>
  );
}

export default Header;
