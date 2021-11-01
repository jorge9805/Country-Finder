import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountries } from "../redux/actions";
import LandingPageCSS from "./Styles/LandingPage.module.css";
import plane from "../images/plane.png";
const LandingPage = () => {
  return (
    <div className={LandingPageCSS.backgroundimg}>
      <NavLink to="/home">
        <img className={LandingPageCSS.plane} src={plane} alt="Home" />
      </NavLink>
    </div>
  );
};

export default LandingPage;