import React, { useEffect, useState } from "react";
import { API_KEYS, YOUTUBE_RELATED_VIDEO_API } from "../utils/constant";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";

const SuggestedVideo = (vidDetails) => {
  const vidName = vidDetails.details.snippet.localized.title;
  const [videoDetails, setVideoDetails] = useState([]);
  useEffect(() => {
    getSuggetsedVideo();
  }, []);
  const getSuggetsedVideo = async () => {
    const data = await fetch(
      YOUTUBE_RELATED_VIDEO_API + vidName + "&key=" + API_KEYS
    );
    const json = await data.json();
    setVideoDetails(json.items);
  };
  return videoDetails.length === 0 ? null : (
    <div className="my-4 mx-6">
      {videoDetails.map((item) => {
        return (
          <Link key={item?.id.videoId} to={"/watch?v=" + item?.id?.videoId}>
            <VideoTiles vidInfo={item} />
          </Link>
        );
      })}
      {/* {console.log(videoDetails)} */}
    </div>
  );
};

const VideoTiles = ({ vidInfo }) => {
  return (
    <div className="w-full my-2 grid grid-flow-col grid-cols-5 gap-3 p-1">
      <div className="col-span-2 content-center">
        <img
          className="rounded-md bg-contain min-w-full h-[100px]"
          src={vidInfo?.snippet?.thumbnails?.medium?.url}
          alt="video-poster"
        />
      </div>
      <div className="col-span-3">
        <p className="text-base font-medium mb-2 line-clamp-2 ">
          {vidInfo?.snippet?.title}
        </p>
        <p className="text-xs font-semibold">{vidInfo.snippet.channelTitle}</p>
        <span className="text-xs font-semibold">
          <TimeAgo date={vidInfo?.snippet?.publishedAt} />
        </span>
      </div>
    </div>
  );
};

export default SuggestedVideo;
