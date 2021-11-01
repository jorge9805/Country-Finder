import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, setContinent, setPage } from "../redux/actions";

const Continent = () => {
  const dispatch = useDispatch();
  const { name, orderAlphabetic, orderPopulation, activity } = useSelector(
    (state) => state
  );
  const handleChange = (e) => {
    dispatch(setPage(0));
    dispatch(setContinent(e.target.value));
    dispatch(
      getCountries({
        orderPopulation,
        orderAlphabetic,
        continent: e.target.value,
        page: 0,
        name,
        activity,
      })
    );
  };

  return (
    <div>
      <select name="Continent" id="continent" onChange={handleChange}>
        <option value="">Continent</option>
        <option value="">All</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </div>
  );
};

export default Continent;
