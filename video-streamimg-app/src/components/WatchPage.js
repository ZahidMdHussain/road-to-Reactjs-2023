import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { API_KEYS, YOUTUBE_VIDEO_API_BYID } from "../utils/constant";
import { closeMenu } from "../utils/toggleSlice";
import Comment from "./Comment";
import LiveChat from "./LiveChat";
import WatchVideoDetails from "./WatchVideoDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [vidDetails, setVidDetails] = useState();
  const vidId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoById(vidId);
  }, []);
  const fetchVideoById = async (vidId) => {
    const data = await fetch(
      YOUTUBE_VIDEO_API_BYID + vidId + "&key=" + API_KEYS
    );
    const json = await data.json();
    // console.log(json.items[0]);
    setVidDetails(json.items[0]);
  };

  return !vidDetails ? null : (
    <>
      <div className="mt-4 mx-4 w-full h-[90vh] overflow-auto scrollbar-thin scrollbar-thumb-[#ff0000] scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
        <div className="grid grid-cols-8 gap-4">
          <iframe
            className="w-full h-[525px] col-span-5"
            src={"https://www.youtube.com/embed/" + vidId + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="col-span-3  py-4">
            <LiveChat />
          </div>
          <div className="col-span-5">
            <WatchVideoDetails details={vidDetails} />
          </div>
          <div className="col-span-3 bg-gray-200 row-span-2">
            Suggested video
          </div>
          <div className="col-span-5">
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
