import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import data from './data.js';


console.log(data)
function Card({cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwoString}) {
    return (
            <div className='card'>
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="food_img" />
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

function Main () {
    return (
        <div className='main'>
            <div className='sub-head'>
                <p>Top restaurants of day</p>
                <input type="text" placeholder="Search here.."/>
            </div>
            <div className='card-container'>
            {data.map((each_resturant) =>{
                return  <Card {...each_resturant} />
            })
            }
                

            </div>
        </div>
    );
}

export default Main;