import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlinks.css";

const Navlinks: React.FC = () => (
  <nav className="navlinks" id="navlinks">
    <ul className="navlinks-list">
      <NavLink end to="/">Home</NavLink>
      <NavLink end to="/contact">Contact</NavLink>
      <NavLink end to="/account">Account</NavLink>
      {/* Add more links here */}
    </ul>
  </nav>
);

export default Navlinks;
