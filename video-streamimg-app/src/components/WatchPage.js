import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { API_KEYS, YOUTUBE_VIDEO_API_BYID } from "../utils/constant";
import { closeMenu } from "../utils/toggleSlice";
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
      <div className="mt-4 mx-4 w-full h-[90vh] overflow-auto scrollbar scrollbar-thin scrollbar-thumb-[#ff0000] scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
        <div className="flex w-[920px] h-[525px]">
          <iframe
            className="w-full h-full"
            src={"https://www.youtube.com/embed/" + vidId + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>Comment-Box</div>
        </div>
        <WatchVideoDetails details={vidDetails} />
      </div>
    </>
  );
};

export default WatchPage;
