import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import CardCSS from "./Styles/Card.module.css";
const Card = ({ name, img, continent, id }) => {
  return (
    <div className={CardCSS.card}>
      <NavLink to={`/home/country/${id}`}>
        <div className={CardCSS.card_image}>
          <img src={img} alt={name} />
        </div>
      </NavLink>
      <div className={CardCSS.card_title}>
        <p>
          {name} <br /> {continent}
        </p>
      </div>
      {/* <p> {continent} </p> */}
    </div>
  );
};

export default Card;
