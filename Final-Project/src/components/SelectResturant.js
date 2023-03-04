import React from "react";
import { useParams } from "react-router-dom";
import { img_cdn_path } from "../confiq";
import { ResturantShimmer } from "./Shimmer";
import useResturant from "../utils/useResturant";
import { additem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";

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
      <div className="p-8">
        <div className="bg-white px-6 py-4 mt-4 font-fsans shadow-lg shadow-slate-400 min-h-[500px] rounded-lg">
          <div className="flex justify-between items-center text-white bg-[#1B1B1B] p-8 rounded-md">
            <div className="ml-8">
              <h1 className="m-3 text-2xl font-semibold">
                {seeResturant?.name}
              </h1>
              <h3 className="m-3 text-lg font-medium">
                {seeResturant?.cuisines.join(", ")}
              </h3>
              <h3 className="m-3 text-lg">
                {seeResturant?.area}, {seeResturant?.city}
              </h3>
              <h4 className="m-3 text-xl font-medium">
                {seeResturant?.costForTwoMsg}
              </h4>
              <p
                className={`flex items-center my-6 mx-3 w-fit px-2 font-bold ${
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
            <div className="">
              <img
                className="ml-4 w-[400px]"
                src={img_cdn_path + seeResturant?.cloudinaryImageId}
                alt="resturant-image"
              />
            </div>
          </div>

          <h1 className="mt-10 border-b text-2xl font-bold text-gray-700">
            All menu items
          </h1>
          <div
            data-testid="menu"
            className="flex justify-start items-center flex-wrap mt-4"
          >
            {Object.values(seeResturant?.menu?.items).map((item) => {
              return (
                item?.cloudinaryImageId && (
                  <div
                    className="flex justify-between items-center m-6 w-[420px] border rounded-md p-4 border-gray-300 hover:shadow-lg ease-in-out duration-300"
                    key={item.id}
                  >
                    <div className="">
                      <h4 className="m-1 text-sm font-bold text-black line-clamp-1">
                        {item.name}
                      </h4>
                      <h5 className="m-1 text-sm font-medium text-gray-700">
                        {item.category}
                      </h5>
                      <h6 className="m-1 text-sm font-medium text-gray-700">
                        FoodType {item.isVeg == 1 ? "Veg" : "Non-Veg"}
                      </h6>
                      <h6 className="m-1 text-sm font-medium text-gray-700">
                        InStock - {item.inStock == 1 ? "Yes" : "No"}
                      </h6>
                      <h6 className="mx-1 my-2 text-base font-medium text-[#479f2c]">
                        Price - {item.price / 100}
                      </h6>
                    </div>
                    <div className="flex flex-col w-[140px]">
                      <img
                        className="shadow-md shadow-slate-500"
                        src={img_cdn_path + item.cloudinaryImageId}
                        alt="menu-item-img"
                      />
                      <button
                        data-testid="addbtn"
                        className="bg-[#60b246] py-2 px-4 mx-auto rounded-md mt-3 text-sm text-white font-bold hover:bg-[#409f24]"
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
