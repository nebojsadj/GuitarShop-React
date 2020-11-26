import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";

function Navbar() {
  const inCart = useSelector((state) => state.guitars.inCart);

  return (
    <nav className="navbar navbar-nav navbar-expand bg-dark">
      <Link to="/" className="navbar-brand text-light ml-4">
        Guitars shop
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink to="/" exact className="nav">
            <HomeIcon style={{ width: "45px", height: "45px" }} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav ml-2">
            <Badge
              badgeContent={inCart.length}
              color="secondary"
              style={{ marginTop: "5px" }}
            >
              <ShoppingCartIcon
                style={{
                  color: "white",
                  width: "40px",
                  height: "40px",
                  marginLeft: "10px",
                }}
              />
            </Badge>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
