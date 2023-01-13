import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import {dataobj, img_cdn_path} from '../confiq';
import { useState } from 'react';


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
                <p className='anchor'><a href="#">QUICK VIEW</a></p>
            </div>
    )
}

function filterSerachCard(searchInputText, restaurantList){
    const filterData = restaurantList.filter((restaurant) => 
        restaurant.name.includes(searchInputText)
    );
    return filterData;
}

function Main () {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurant] = useState(dataobj);
    return (
        <div className='main'>
            <div className='sub-head'>
                <p>Top restaurants of day</p>
                <div className='search-conatiner'>
                <input type="text" className='search-input' placeholder="Search here.." value={searchText} onChange={ (e) => {
                    setSearchText(e.target.value)
                }}/>
                <button className='serach-btn' onClick={() => {
                    const filteredRestaurants = filterSerachCard(searchText, dataobj);
                    setRestaurant(filteredRestaurants);
                }}>Search</button>
                </div>  
            </div>
            <div className='card-container'>
            {restaurants.map((each_resturant) =>{
                return  <Card {...each_resturant} key={each_resturant.id} />
            })
            }
                
            </div>
        </div>
    );
}

export default Main;