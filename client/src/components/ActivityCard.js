import React from "react";
import tree from "../images/tree.png";
import sun from "../images/sun.png";
import snowflake from "../images/snowflake.png";
import autumn from "../images/autumn.png";
import ActivityCSS from "./Styles/Activity.module.css";
const ActivityCard = ({ name, duration, season, difficulty }) => {
  let square = [];
  for (let i = 1; i <= difficulty; i++) {
    square.push(<div className={ActivityCSS.square} key={i}></div>);
  }
  let borderColor = "";
  if (season === "winter") {
    borderColor = "rgba(28, 110, 164, 0.57)";
  }
  if (season === "spring") {
    borderColor = "rgba(126, 211, 175, 0.57)";
  }
  if (season === "summer") {
    borderColor = "rgba(241, 239, 121, 0.945)";
  }
  if (season === "autumn") {
    borderColor = "rgba(133, 94, 68, 0.945)";
  }
  console.log(name, duration, season, difficulty);

  return (
    <div className={ActivityCSS.card} style={{ borderColor: borderColor }}>
      <h3>{name}</h3>

      <div className={ActivityCSS.season}>
        {season === "spring" ? (
          <img src={tree} alt="spring" />
        ) : season === "summer" ? (
          <img src={sun} alt="summer" />
        ) : season === "winter" ? (
          <img src={snowflake} alt="winter" />
        ) : (
          <img src={autumn} alt="autumn" />
        )}
      </div>
      {/* <div className={ActivityCSS.description}> */}
      <div className={ActivityCSS.duration}>Duration: {duration}</div>
      <div className={ActivityCSS.barcontainer}>{square}</div>
      <p>
        Difficulty:&nbsp;
        {difficulty === 1 || difficulty === 2
          ? "easy"
          : difficulty == 3
          ? "moderate"
          : "hard"}
      </p>
      {/* </div> */}
    </div>
  );
};

export default ActivityCard;
