import React from "react";
import { useSelector } from "react-redux";
import {
  sidemenuSectionOne,
  sidemenuSectionTwo,
  sidemenuSectionThree,
} from "../utils/config";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const isMenuOpen = useSelector((store) => store.toggle.toggleMenuSlice);

  return !isMenuOpen ? (
    <div className="w-max min-w-fit h-[92vh] overflow-auto p-2 font-sans">
      <div className="border-b py-5">
        {sidemenuSectionOne.map((item, i) => {
          return (
            <Link key={"id:" + i} to="/">
              <div
                className="flex justify-start flex-col items-center p-1 my-4 py-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
                key={item.menuId}
              >
                <img className="h-5" src={item.img} alt="" />
                <span className="text-xs py-2">{item.text}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="w-[15%] min-w-fit h-[92vh] scrollbar-thin scrollbar-thumb-[#ff0000] scrollbar-track-gray-100 scrollbar-thumb-rounded-md overflow-auto p-4 font-sans text-sm">
      <div className="border-b py-4">
        {sidemenuSectionOne.map((item, i) => {
          return (
            <Link key={"id:" + i} to="/">
              <div
                className="flex justify-start items-center p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
                key={item.menuId}
              >
                <img className="h-5" src={item.img} alt="" />
                <span className="pl-6">{item.text}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="border-b py-4">
        {sidemenuSectionTwo.map((item) => {
          return (
            <div
              className="flex justify-start items-center p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
              key={item.menuId}
            >
              <img className="h-5" src={item.img} alt="" />
              <span className="pl-6">{item.text}</span>
            </div>
          );
        })}
      </div>

      <div className="border-b py-4">
        <h2 className="py-2">Explore</h2>
        {sidemenuSectionThree.map((item) => {
          return (
            <div
              className="flex justify-start items-center p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
              key={item.menuId}
            >
              <img className="h-5" src={item.img} alt="" />
              <span className="pl-6">{item.text}</span>
            </div>
          );
        })}
      </div>
      <div className="py-4 text-xs">
        <h1 className="px-2 py-[2px]"> TermsPrivacy </h1>
        <h1 className="px-2 py-[2px]"> Policy & Safety </h1>
        <h1 className="px-2 py-[2px]"> About Press Copyright </h1>
      </div>
    </div>
  );
};

export default SideMenu;
