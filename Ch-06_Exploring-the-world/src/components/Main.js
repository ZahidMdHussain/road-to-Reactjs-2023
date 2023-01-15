import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { img_cdn_path, dataobj} from '../confiq';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';


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
        restaurant?.data?.name?.toLowerCase().includes(searchInputText.toLowerCase())
    );
    return filterData;
}



function Main () {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurant] = useState([]);
    // let msg = "Data is being fetched..";
    // intialize useEffect

    useEffect(() => {
        getApiData()
    },[])

    // api call functions
    
    async function getApiData(){
        const data = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.7913957&lng=85.0002336&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // console.log(json);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    return (
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
                    // if (filteredRestaurants.length===0){
                    //     msg = "No Match item found.."
                    // }else{
                    //     msg = "Data is being fetched..";
                    // }
                }}>Search</button>
                </div>  
            </div>
            <div className='card-container'>
            {(filteredRestaurants.length===0?<Shimmer />:
            filteredRestaurants.map((each_resturant) =>{
                return  <Card {...each_resturant?.data} key={each_resturant?.data?.id} />
            })
            
            )} 
            </div>
        </div>
    );
}

export default Main;