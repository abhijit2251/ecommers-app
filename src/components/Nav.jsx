import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="nav-content">
        <div className="logo">
          <Link to="/">NOMAD</Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">CartICON</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
