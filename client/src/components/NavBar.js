import React from "react";
import { NavLink } from "react-router-dom";
import NavBarCSS from "./Styles/NavBar.module.css";
import { BiWorld } from "react-icons/bi";
const NavBar = () => {
  return (
    <ul className={NavBarCSS}>
      <li>
        <NavLink
          exact
          to="/home"
          className={NavBarCSS.link}
          activeClassName="selected"
          activeStyle={{ backgroundColor: "#04AA6D" }}
        >
          <BiWorld className={NavBarCSS.icon} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/home/create"
          className={NavBarCSS.link}
          activeClassName="selected"
          activeStyle={{ backgroundColor: "#04AA6D" }}
        >
          Create Activity
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
