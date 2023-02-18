import React from "react";
import logo from "../assets/img/logo.png";
import hamburg from "../assets/img/hamburg.png";
import video from "../assets/img/add-video.png";
import notify from "../assets/img/notification.png";
import user from "../assets/img/user.png";
import search from "../assets/img/search.png";

const Header = () => {
  return (
    <div className="grid grid-flow-col py-2 px-4 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          className="h-[38px] mx-2 p-2 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={hamburg}
          alt="sidebar-toggle-button"
        />
        <img className="h-[24px]" src={logo} alt="app-logo" />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-2/4 p-2 px-6 border border-slate-400 rounded-tl-full rounded-bl-full outline-blue-200"
          type="text"
          name=""
          id=""
          placeholder="Serach"
        />
        <button className="p-2 border bg-gray-50 border-l-0  border-slate-400 rounded-tr-full rounded-br-full align-top hover:bg-gray-200">
          <img className="h-[24px] px-3" src={search} alt="" />
        </button>
      </div>
      <div className="flex justify-center items-center col-span-1">
        <img
          className="h-[40px] p-2 ml-4 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={video}
          alt=""
        />
        <img
          className="h-[36px] p-2 ml-4 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={notify}
          alt=""
        />
        <img
          className="h-[36px] p-2 ml-4 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={user}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
