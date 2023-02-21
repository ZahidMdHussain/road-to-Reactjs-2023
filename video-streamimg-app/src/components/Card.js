import React from "react";
import logo from "../assets/img/channelImg.jpg";
import thumbnail from "../assets/img/cardthumb.webp";
import { useSelector } from "react-redux";

const Card = () => {
  const toggleStatus = useSelector((store) => store.toggle.toggleMenuSlice);
  return toggleStatus ? (
    <div className="w-[270px] overflow-hidden mx-4 my-2">
      <div className="relative">
        <img className="rounded-md" src={thumbnail} alt="video-poster" />
        <span className="bg-black text-white text-xs absolute bottom-1 right-1 px-1 font-semibold">
          2:23
        </span>
      </div>
      <div className="grid grid-flow-col grid-cols-9 my-4">
        <div className="mx-2 col-span-2">
          <img className="h-9 rounded-full" src={logo} alt="channel-logo" />
        </div>
        <div className="col-span-7">
          <p className="text-base font-medium mb-2 line-clamp-2 ">
            The love mashup 2023 | Best of Arjit Atif and B Praak from 2022 and
            2023
          </p>
          <p className="text-xs font-semibold">Prime video India</p>
          <span className="text-xs font-semibold">1.6K views</span> &nbsp;
          <span className="text-xs font-semibold">2 minutes ago</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[295px] overflow-hidden mx-5 my-2">
      <div className="relative">
        <img className="rounded-md" src={thumbnail} alt="video-poster" />
        <span className="bg-black text-white text-xs absolute bottom-1 right-1 px-1 font-semibold">
          2:23
        </span>
      </div>
      <div className="grid grid-flow-col grid-cols-9 my-4">
        <div className="mx-2 col-span-2">
          <img className="h-9 rounded-full" src={logo} alt="channel-logo" />
        </div>
        <div className="col-span-7">
          <p className="text-base font-medium mb-2 line-clamp-2 ">
            The love mashup 2023 | Best of Arjit Atif and B Praak from 2022 and
            2023
          </p>
          <p className="text-xs font-semibold">Prime video India</p>
          <span className="text-xs font-semibold">1.6K views</span> &nbsp;
          <span className="text-xs font-semibold">2 minutes ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
