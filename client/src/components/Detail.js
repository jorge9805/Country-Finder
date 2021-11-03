import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../redux/actions";
import ActivityCard from "./ActivityCard";
import DetailCSS from "./Styles/Detail.module.css";

const Detail = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);
  console.log(detail);
  return (
    <div>
      <h1>Detail</h1>
      <div className={DetailCSS.card}>
        <div className={DetailCSS.card_image}>
          <img src={detail?.img} alt={detail?.name} />
        </div>
        <div className={DetailCSS.description}>
          <h1>{detail?.name}</h1>
          <p>
            <b>Code:</b> {detail?.id} <br />
            <b>Continent:</b> {detail?.continent} <br />
            <b>Region:</b> {detail?.region} <br />
            <b>Capital:</b> {detail?.capital} <br />
            <b>Area:</b> {detail?.area}&nbsp;
            <var>
              Km<sup>2</sup>
            </var>
            <br />
            <b>Population:</b> {detail?.population} <br />
          </p>
        </div>
      </div>
      <hr />
      <h2>Activities</h2>
      <div className={DetailCSS.activities_list}>
        {detail?.activities?.length ? (
          detail.activities.map((activity) => {
            return (
              <ActivityCard
                name={activity.name}
                difficulty={activity.difficulty}
                duration={activity.duration}
                season={activity.season}
              />
            );
          })
        ) : (
          <p className={DetailCSS.no_activities}>No Activities Yet</p>
        )}
      </div>
    </div>
  );
};

export default Detail;

// https://codepen.io/ahmadbassamemran/pen/XvdEoO

/* <div key={activity.id} className={DetailCSS.activity_card}>
              <p>{activity.name}</p>
              <p>{activity.difficulty}</p>
              <p>{activity.duration}</p>
              <p>{activity.season}</p>
            </div> */
