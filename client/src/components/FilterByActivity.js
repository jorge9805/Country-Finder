import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  getCountries,
  setActivity,
  setPage,
  // getCountriesByActivity,
} from "../redux/actions";

const FilterByActivity = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  const { activities, name, orderAlphabetic, orderPopulation, continent } =
    useSelector((state) => state);

  const handleChange = (e) => {
    // console.log(e.target.value);
    dispatch(setPage(0));
    dispatch(setActivity(e.target.value));
    dispatch(
      getCountries({
        page: 0,
        activity: e.target.value,
        name,
        orderAlphabetic,
        orderPopulation,
        continent,
      })
    );
  };
  return (
    <div>
      <select name="activities" id="activities" onChange={handleChange}>
        <option value="">Activities</option>
        <option value="">No activities</option>
        {activities?.map((activity) => {
          return (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterByActivity;
