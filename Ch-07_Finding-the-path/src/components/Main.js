import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { img_cdn_path} from '../confiq';
import { useState, useEffect } from 'react';
import Shimmer, {NoRestaurant} from './Shimmer';
import {Link} from 'react-router-dom';


function Card({cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwoString}) {
    return (
            <div className='card'>
                <img src={img_cdn_path+cloudinaryImageId} alt="food_img" />
                <h3>{name}</h3>
                <h5 className='cousine'>{cuisines.join(", ")}</h5>   
                <div className='card-subdivision'>
                    <p><span>⭐</span>{avgRating}</p>
                    <p>{deliveryTime} MINS</p>
                    <p>{costForTwoString}</p>
                </div>
                <p className='anchor'><span href="#">QUICK VIEW</span></p>
            </div>
    )
}

function filterSerachCard(searchInputText, restaurantList){
    const filterData = restaurantList.filter((restaurant) => 
        restaurant?.data?.name?.toLowerCase().includes(searchInputText.toLowerCase())
    );
    return filterData;
}



function Main () {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurant] = useState([]);
    
    // intialize useEffect
    useEffect(() => {
        getApiData()
    },[])

    // api call functions
    async function getApiData(){
        const data = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    return (!allRestaurants)?null:(
        <div className='main'>
            <div className='sub-head'>
                <p>Top restaurants of day</p>
                <div className='search-conatiner'>
                <input type="text" className='search-input' placeholder="Search here.." value={searchText} onChange={ (e) => {
                    setSearchText(e.target.value)
                }}/>
                <button className='serach-btn' onClick={() => {
                    const filteredRestaurants = filterSerachCard(searchText, allRestaurants);
                    setFilteredRestaurant(filteredRestaurants);
                }}>Search</button>
                </div>  
            </div>
            <div className='card-container'>    
            {(allRestaurants.length===0?<Shimmer />:
            filteredRestaurants.length===0?<NoRestaurant />:
            filteredRestaurants.map((each_resturant) =>{
                return  <Link className='card' to={"/restaurants/"+each_resturant?.data?.id} key={each_resturant?.data?.id} >
                <Card {...each_resturant?.data} />
                </Link>
            })
            )}
            
            </div>
        </div>
    );
}

export default Main;