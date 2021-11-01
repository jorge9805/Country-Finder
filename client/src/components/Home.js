import "../App.css";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, setPage } from "../redux/actions";
import Card from "./Card";
import Order from "./Order";
import Search from "./Search";
import Continent from "./Continent";
import FilterByActivity from "./FilterByActivity";
import CardCSS from "./Styles/Card.module.css";
import FilterBarCSS from "./Styles/FilterBar.module.css";
import HomeCSS from "./Styles/Home.module.css";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCountries({
        page,
        orderAlphabetic,
        orderPopulation,
        continent,
        name,
      })
    );
  }, [dispatch]);
  const { countries, page, orderAlphabetic, orderPopulation, continent, name } =
    useSelector((state) => state);
  let countriesOfPage = [];
  countries && (countriesOfPage = countries.slice(page * 10, page * 10 + 10));
  countriesOfPage = countriesOfPage.map((country) => {
    return <Card {...country} key={country.id} id={country.id} />;
  });
  return (
    <div className="App">
      <Search />
      <hr />
      <div className={FilterBarCSS.items}>
        <Order />
        <Continent />
        <FilterByActivity />
      </div>
      <hr />
      <div className={CardCSS.card_list}>{countriesOfPage}</div>
      {countries.length === 0 && (
        <p className={HomeCSS.nocountries}>No Country Matched Your Search!</p>
      )}
      <div className={HomeCSS.btns}>
        <button onClick={() => dispatch(setPage(page === 0 ? 0 : page - 1))}>
          &laquo; Previous
        </button>
        <button onClick={() => dispatch(setPage(0))}>Go To Page 1</button>
        <button
          onClick={() => {
            console.log(countries.length / 10);
            dispatch(
              setPage(
                page === Math.ceil(countries.length / 10 - 1)
                  ? Math.ceil(countries.length / 10 - 1)
                  : page + 1
              )
            );
          }}
        >
          Next &raquo;
        </button>
      </div>
      {/* <p>Pg:{page}</p> */}
    </div>
  );
}

export default Home;
