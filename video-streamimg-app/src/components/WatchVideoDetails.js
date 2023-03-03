import liked from "../assets/img/liked.png";
import dislike from "../assets/img/dont-like.png";
import share from "../assets/img/share.png";
import TimeAgo from "react-timeago";

const WatchVideoDetails = (vidDetails) => {
  const viewFun = (view) => {
    return view < 1000
      ? view
      : view > 1000 && view < 1000000
      ? (view / 1000).toFixed(0) + "K"
      : (view / 1000000).toFixed(1) + "M";
  };
  return (
    <div className="my-4 w-full">
      <h1 className="text-lg font-medium">
        {vidDetails.details.snippet.localized.title}
      </h1>
      <div className="flex justify-between items-center my-8">
        <div className="flex justify-start items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={vidDetails.details.snippet.thumbnails.high.url}
            alt=""
          />
          <div className="ml-5">
            <p className="text-base font-medium">
              {vidDetails.details.snippet.channelTitle}
            </p>
            <p className="text-sm font-medium text-gray-500">
              {viewFun(vidDetails.details.statistics.viewCount)} subscribers
            </p>
          </div>
          <button className="mx-5 px-4 py-2 bg-black text-white rounded-full font-semibold hover:bg-zinc-800">
            Subscribe
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex items-center font-medium px-3 py-2 bg-gray-100 rounded-tl-full rounded-bl-full hover:bg-gray-200 hover:cursor-pointer">
            <img className="w-6 mx-1" src={liked} alt="Like-video" />
            <button className="">
              {viewFun(vidDetails.details.statistics.likeCount)}
            </button>
          </div>
          <div className="flex items-center font-medium px-5 py-2 bg-gray-100 rounded-tr-full rounded-br-full border-l border-gray-300 hover:bg-gray-200 mr-2 hover:cursor-pointer">
            <img className="w-6" src={dislike} alt="Like-video" />
            <button className=""></button>
          </div>
          <div className="flex items-center font-medium px-3 py-2 bg-gray-100 mx-1 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <img className="w-5" src={share} alt="Like-video" />
            <button className="ml-2">Share</button>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg">
        <TimeAgo
          className="text-sm font-medium"
          date={vidDetails.details.snippet.publishedAt}
        />
        <p className="mt-2 text-xs leading-5 line-clamp-4 hover:line-clamp-none ease-in-out duration-500">
          {vidDetails.details.snippet.description}
        </p>
        <span className="text-xs font-semibold ">Show more</span>
      </div>
    </div>
  );
};

export default WatchVideoDetails;
