import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { img_cdn_path } from "../confiq";
import { ResturantShimmer } from "./Shimmer";
import useResturant from "../utils/useResturant";
import { additem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import "./selectresturant.css";

const SelectResturant = () => {
  const { id } = useParams();
  const seeResturant = useResturant(id);
  const dispatch = useDispatch();

  const addtoCart = (item) => {
    dispatch(additem(item));
  };

  return !seeResturant ? (
    <ResturantShimmer />
  ) : (
    <>
      <div className="resturant-conatainer">
        <div className="select-resturants">
          <div className="resturant-info">
            <div className="resturant-text">
              <h1>{seeResturant?.name}</h1>
              <h3>{seeResturant?.cuisines.join(", ")}</h3>
              <h3>
                {seeResturant?.area}, {seeResturant?.city}
              </h3>
              <h4>{seeResturant?.costForTwoMsg}</h4>
              <p
                className={`flex items-center w-fit px-2 font-bold ${
                  +seeResturant?.avgRating >= 4
                    ? "bg-[#48c479]"
                    : "bg-[#db7c38]"
                } text-white`}
              >
                <span className="align-baseline">
                  <AiFillStar className="inline" />
                </span>
                <span className="align-baseline pl-1">
                  {seeResturant?.avgRating}
                </span>
              </p>
            </div>
            <div className="resturant-img">
              <img
                src={img_cdn_path + seeResturant?.cloudinaryImageId}
                alt="resturant-image"
              />
            </div>
          </div>
          <h1 className="heading-menu">All menu items</h1>
          <div data-testid="menu" className="resturant-menu">
            {Object.values(seeResturant?.menu?.items).map((item) => {
              return (
                item?.cloudinaryImageId && (
                  <div className="each-menu" key={item.id}>
                    <div className="menu-info">
                      <h4>{item.name}</h4>
                      <h5>{item.category}</h5>
                      <h6>FoodType {item.isVeg == 1 ? "Veg" : "Non-Veg"}</h6>
                      <h6>InStock - {item.inStock == 1 ? "Yes" : "No"}</h6>
                      <h6>Price - {item.price / 100}</h6>
                    </div>
                    <div className="menu-img flex flex-col">
                      <img
                        src={img_cdn_path + item.cloudinaryImageId}
                        alt="menu-item-img"
                      />
                      <button
                        data-testid="addbtn"
                        className="bg-[#60b246] py-2 px-4 mx-auto rounded-md mt-3 text-sm text-white font-bold"
                        onClick={() => addtoCart(item)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectResturant;
