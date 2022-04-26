import React from "react";
import { NavLink } from "react-router-dom";
import LandingPageCSS from "./Styles/LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={LandingPageCSS.backgroundimg}>
      <NavLink to="/home" className={LandingPageCSS.button}>
        <span>Let's Travel</span>
      </NavLink>
    </div>
  );
};

export default LandingPage;
