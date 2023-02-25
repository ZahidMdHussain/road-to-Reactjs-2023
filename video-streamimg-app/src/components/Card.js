import React from "react";
import { useSelector } from "react-redux";
import TimeAgo from "react-timeago";

const Card = ({
  channel,
  title,
  views,
  published,
  poster,
  channelImg,
  duration,
}) => {
  const viewFun = (view) => {
    return view < 1000
      ? view
      : view > 1000 && view < 1000000
      ? (view / 1000).toFixed(0) + "K"
      : (view / 1000000).toFixed(1) + "M";
  };

  const durations = duration.replace(/P|T|S/g, "").replace(/H|M/g, ":");
  const toggleStatus = useSelector((store) => store.toggle.toggleMenuSlice);
  return toggleStatus ? (
    <div className="w-[270px] overflow-hidden mx-4 mt-4">
      <div className="relative">
        <img className="rounded-md bg-cover" src={poster} alt="video-poster" />
        <span className="bg-black text-white text-xs absolute bottom-1 right-1 px-1 font-semibold">
          {durations}
        </span>
      </div>
      <div className="grid grid-flow-col grid-cols-9 my-4">
        <div className="mx-2 col-span-2">
          <img
            className="h-9 w-9 rounded-full bg-cover"
            src={channelImg}
            alt="channel-logo"
          />
        </div>
        <div className="col-span-7">
          <p className="text-base font-medium mb-2 line-clamp-2 ">{title}</p>
          <p className="text-xs font-semibold">{channel}</p>
          <span className="text-xs font-semibold">
            {viewFun(views)} views
          </span>{" "}
          &nbsp;
          <span className="text-xs font-semibold">
            <TimeAgo date={published} />
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[295px] overflow-hidden mx-5 my-2">
      <div className="relative">
        <img className="rounded-md bg-cover" src={poster} alt="video-poster" />
        <span className="bg-black text-white text-xs absolute bottom-1 right-1 px-1 font-semibold">
          {durations}
        </span>
      </div>
      <div className="grid grid-flow-col grid-cols-9 my-4">
        <div className="mx-2 col-span-2">
          <img
            className="h-9 w-9 rounded-full"
            src={channelImg}
            alt="channel-logo"
          />
        </div>
        <div className="col-span-7">
          <p className="text-base font-medium mb-2 line-clamp-2 ">{title}</p>
          <p className="text-xs font-semibold">{channel}</p>
          <span className="text-xs font-semibold">
            {viewFun(views)} views
          </span>{" "}
          &nbsp;
          <span className="text-xs font-semibold">
            <TimeAgo date={published} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
