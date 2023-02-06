import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { img_cdn_path } from "../confiq";
import {ResturantShimmer} from "./Shimmer";
import useResturant from "../utils/useResturant";
import "./selectresturant.css";

const SelectResturant = () => {

    const {id} = useParams();
    const seeResturant = useResturant(id);
    
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
            {Object.values(seeResturant?.menu?.items)
            .map((item)=> {
            return (
                item?.cloudinaryImageId &&
                <div className="each-menu" key={item.id}>
                <div className="menu-info">
                <h4>{item.name}</h4>
                <h5>{item.category}</h5>
                <h6>InStock - {(item.inStock==1)?"Yes":"No"}</h6>
                </div>
                <div className="menu-img">
                    
                    <img src={img_cdn_path+item.cloudinaryImageId} alt="menu-item-img" />
                    {console.log(item.cloudinaryImageId)}
                </div>
            </div>);
            })}
        </div>
        </div>
    </div>
    </>
)
}

export default SelectResturant;