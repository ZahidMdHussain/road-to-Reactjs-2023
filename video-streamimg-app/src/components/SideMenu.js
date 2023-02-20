import React from "react";
import {
  sidemenuSectionOne,
  sidemenuSectionTwo,
  sidemenuSectionThree,
} from "../utils/config";

const SideMenu = () => {
  return (
    <div className="w-[220px] shadow-md p-4 h-[92vh] overflow-hidden font-sans hover:overflow-y-auto">
      <div className="border-b py-4">
        {sidemenuSectionOne.map((item) => {
          return (
            <div
              className="flex justify-start items-center p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer"
              key={item.menuId}
            >
              <img className="h-6" src={item.img} alt="" />
              <span className="pl-6">{item.text}</span>
            </div>
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
              <img className="h-6" src={item.img} alt="" />
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
              <img className="h-6" src={item.img} alt="" />
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
