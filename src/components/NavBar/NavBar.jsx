import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar">
      <h1>
        Meals <span>App</span>
      </h1>

      <div className="navbar-heading">
        <div className="navbar-links">
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Random</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
