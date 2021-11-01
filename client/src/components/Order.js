import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOrderAlphabetic,
  getCountries,
  setOrderPopulation,
} from "../redux/actions";

const Order = () => {
  const { page, continent, name, activity } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "asc" || e.target.value === "desc") {
      dispatch(setOrderAlphabetic(e.target.value));
      dispatch(
        getCountries({
          orderAlphabetic: e.target.value,
          page,
          continent,
          name,
          activity,
        })
      );
    }
    if (e.target.value === "more" || e.target.value === "less") {
      dispatch(setOrderPopulation(e.target.value));
      dispatch(
        getCountries({
          orderPopulation: e.target.value,
          page,
          continent,
          name,
          activity,
        })
      );
    }
  };

  return (
    <div>
      <select id="order" name="order" onClick={handleChange}>
        <option value="">Sort results by</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="more">Largest Population(First)</option>
        <option value="less">Lowest Population(First)</option>
      </select>
    </div>
  );
};

export default Order;
