import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountries, setName, setPage } from "../redux/actions";
import { BiSearchAlt } from "react-icons/bi";
import SearchCSS from "./Styles/Search.module.css";

const Search = () => {
  const { orderAlphabetic, orderPopulation, continent, activity } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(setName(input));
    dispatch(
      getCountries({
        name: input,
        page: 0,
        orderAlphabetic,
        orderPopulation,
        continent,
        activity,
      })
    );
    dispatch(setPage(0));
  };
  const handleOnChange = (e) => {
    if (e.target.value === "") {
      dispatch(setName(""));
    }
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className={SearchCSS.wrap}>
      <form onSubmit={handleSubmit} className={SearchCSS.search_bar}>
        <input
          className={SearchCSS.search_input}
          type="text"
          placeholder="Search..."
          onChange={handleOnChange}
          value={input}
        />
        <button type="submit" className={SearchCSS.search_btn}>
          <BiSearchAlt />
        </button>
        {/* <button type="submit">🔍</button> */}
      </form>
    </div>
  );
};

export default Search;
