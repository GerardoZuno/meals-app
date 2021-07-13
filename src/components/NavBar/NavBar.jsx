import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <h1>
        Meals <span>App</span>
      </h1>

      <div className="navbar-heading">
        <div className="navbar-links">
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/categories'}><li>Categories</li></Link>
            <Link to={'/random'}><li>Random</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
