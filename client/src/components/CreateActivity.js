import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from "../redux/actions";
import CreateCSS from "./Styles/Create.module.css";
const CreateActivity = () => {
  const [activity, setActivity] = useState({
    countries: [],
    name: "",
    duration: "",
    season: "",
    difficulty: 0,
  });
  const { countries } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries({}));
  }, [dispatch]);

  const handleOnChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnChangeForCountries = (e) => {
    setActivity({
      ...activity,
      countries: [...activity.countries, e.target.value],
    });
  };
  const handleOnChangeForDifficulty = (e) => {
    setActivity({
      ...activity,
      difficulty: !isNaN(e.target.value) ? parseInt(e.target.value) : 0,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(activity));
    console.log(activity);
    setActivity({
      countries: [],
      name: "",
      duration: "",
      season: "",
      difficulty: 0,
    });
  };

  return (
    <div className={CreateCSS.container}>
      <h2 className={CreateCSS.title}>
        Create your <br /> Activity
      </h2>
      <form onSubmit={handleSubmit} className={CreateCSS.form}>
        <h3>Let's create your activity</h3>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Activity "
          value={activity.name}
          onChange={handleOnChange}
          required
        />
        <input
          type="text"
          name="duration"
          id="duration"
          placeholder="Duration"
          value={activity.duration}
          onChange={handleOnChange}
          required
        />
        <select
          name="difficulty"
          id="difficulty"
          onChange={handleOnChangeForDifficulty}
          required
        >
          <option value="">Difficulty</option>
          <option value="1">1. Easy</option>
          <option value="2">2. Easy</option>
          <option value="3">3. Moderate</option>
          <option value="4">4. Hard</option>
          <option value="5">5. Hard</option>
        </select>
        <select name="season" id="season" onChange={handleOnChange} required>
          <option value="">Season</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
        </select>

        <select
          name="countries"
          id="countries"
          onChange={handleOnChangeForCountries}
          required
        >
          <option value="">Countries</option>
          {countries?.map((country) => {
            return (
              <option value={country.name} key={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
        <button type="submit" className={CreateCSS.submit}>
          Submit
        </button>
      </form>
      <div className={CreateCSS.countries}>
        <h2>Countries For This Activity</h2>
        {activity.countries.map((country) => {
          return (
            <div key={country} className={CreateCSS.country}>
              {country}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateActivity;

/* <input
  type="number"
  name="difficulty"
  id="difficulty"
  placeholder="Difficulty"
  min="0"
  max="5"
  value={activity.difficulty}
  onChange={handleOnChangeForDifficulty}
/> */
