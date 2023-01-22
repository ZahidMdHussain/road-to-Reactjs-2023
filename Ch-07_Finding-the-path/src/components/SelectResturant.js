import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { img_cdn_path } from "../confiq";
import {ResturantShimmer} from "./Shimmer";
import "./selectresturant.css";

const SelectResturant = () => {
    const [seeResturant, setSeeResturant] = useState(null);
    const {id} = useParams();
    useEffect(() =>{
        getResturantData();
    }, [])

    async function getResturantData(){
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId='+id);
        const json = await data.json();
        // setSeeResturant(json.data);
    }

    
      return (!seeResturant)?<ResturantShimmer />:(
        <>
        <div className="resturant-conatainer">
        <div className="select-resturants">
            <div className="resturant-info">
               <div className="resturant-text">
                <h1>{seeResturant?.name}</h1>
                <h3>{seeResturant?.cuisines.join(", ")}</h3>
                <h3>{seeResturant?.area}, {seeResturant?.city}</h3>
                <h4>{seeResturant?.costForTwoMsg}</h4>
                <h4>⭐ {seeResturant?.avgRating}</h4>
               </div>
               <div className="resturant-img">
                    <img src={img_cdn_path+seeResturant?.cloudinaryImageId} alt="resturant-image" />
               </div>
            </div>
            <h1 className="heading-menu">All menu items</h1>
            <div className="resturant-menu">
                {/* <div className=""> */}
                {Object.values(seeResturant?.menu?.items)
                .slice(0,21).map((item)=> {
                return (
                <div className="each-menu" key={item.id}>
                    <div className="menu-info">
                    <h4>{item.name}</h4>
                    <h5>{item.category}</h5>
                    <h6>InStock - {(item.inStock==1)?"True":"False"}</h6>
                    </div>
                    <div className="menu-img">
                        <img src={img_cdn_path+item.cloudinaryImageId} alt="menu-item-img" />
                    </div>
                </div>
                );
                })}
                {/* </div>   */}
            </div>
            </div>
        </div>
        </>
    )
}

export default SelectResturant;