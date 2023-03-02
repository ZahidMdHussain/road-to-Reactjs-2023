import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEYS, YOUTUBE_SEARCHED_VIDEO_API } from "../utils/constant";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";

const SerachContainer = () => {
  const [queryParams] = useSearchParams();
  const searchQuery = queryParams.get("q");
  const [searchedVideo, setSearchedVideo] = useState([]);
  useEffect(() => {
    getSearchedApiData();
  }, [searchQuery]);
  const getSearchedApiData = async () => {
    const data = await fetch(
      YOUTUBE_SEARCHED_VIDEO_API + searchQuery + "&key=" + API_KEYS
    );
    const json = await data.json();
    setSearchedVideo(json.items);
    // console.log(searchedVideo);
  };
  return (
    <div className="w-[70%]">
      <div className="m-6 px-2 py-1 font-medium text-lg border-b-2 w-full">
        Searched for <span className="italic text-sky-500"> {searchQuery}</span>
      </div>
      <div className="w-full m-6 px-4 py-2">
        {searchedVideo.map((item, index) => {
          return (
            item.id.kind === "youtube#video" && (
              <Link
                key={item?.id?.videoId + index}
                to={"/watch?v=" + item?.id?.videoId}
              >
                <SearchedVideoTiles
                  key={item?.id?.videoId + index}
                  vidInfo={item}
                />
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};

const SearchedVideoTiles = ({ vidInfo }) => {
  return (
    <div>
      <div className="w-full my-2 grid grid-flow-col grid-cols-5 gap-5 p-1">
        <div className="col-span-2 content-center">
          <img
            className="rounded-md bg-contain min-w-full"
            src={vidInfo?.snippet?.thumbnails?.medium?.url}
            alt="video-poster"
          />
        </div>
        <div className="col-span-3">
          <p className="text-lg font-medium mb-2 line-clamp-2 ">
            {vidInfo?.snippet?.title}
          </p>
          <p className="text-base font-semibold">
            {vidInfo.snippet.channelTitle}
          </p>
          <span className="text-sm font-semibold">
            <TimeAgo date={vidInfo?.snippet?.publishedAt} />
          </span>
          <p className="my-4 text-gray-600">{vidInfo.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SerachContainer;
