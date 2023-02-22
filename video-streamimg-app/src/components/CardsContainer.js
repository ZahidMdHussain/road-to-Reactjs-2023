import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import Card from "./Card";

const CardsContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideo(json.items);
  };

  return (
    <div className="w-full mx-2 my-8 flex flex-wrap justify-start">
      {video.map((item) => {
        return (
          <Card
            key={item.id}
            channel={item.snippet.channelTitle}
            title={item.snippet.localized.title}
            views={item.statistics.viewCount}
            published={item.snippet.publishedAt}
            poster={item.snippet.thumbnails.medium.url}
            channelImg={item.snippet.thumbnails.default.url}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
