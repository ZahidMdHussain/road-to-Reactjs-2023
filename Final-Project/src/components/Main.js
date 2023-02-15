import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Shimmer, { NoRestaurant } from "./Shimmer";
import userContext from "../utils/LoginContext";
import Card from "./Card";
import Login from "./Login";
import { Link } from "react-router-dom";
import { filterSerachCard } from "../utils/helper";
import useOnline from "../utils/useOnline";

function Main() {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurant] = useState([]);

  // intialize useEffect

  useEffect(() => {
    getApiData();
  }, []);

  // api call functions
  async function getApiData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const { login } = useContext(userContext);

  const isOnline = useOnline();
  return !isOnline ? (
    <h2 data-testid="checkOnline">
      🔴It seems your internet connection lost...
    </h2>
  ) : !allRestaurants ? null : (
    <div className="main">
      <div className="sub-head">
        <p>Top restaurants of day</p>
        {/* <Login />
        <h3>{login.username}</h3> */}
        <div className="search-conatiner">
          <input
            data-testid="searchInput"
            type="text"
            className="search-input"
            placeholder="Search here.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid="checkSearch"
            className="serach-btn"
            onClick={() => {
              const filteredRestaurants = filterSerachCard(
                searchText,
                allRestaurants
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="card-container-parent">
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants.length === 0 ? (
          <NoRestaurant />
        ) : (
          <div data-testid="resturantLists" className="card-container">
            {filteredRestaurants.map((each_resturant) => {
              return (
                <Link
                  className="card"
                  to={"/restaurants/" + each_resturant?.data?.id}
                  key={each_resturant?.data?.id}
                >
                  <Card {...each_resturant?.data} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
