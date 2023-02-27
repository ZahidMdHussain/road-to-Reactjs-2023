import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import hamburg from "../assets/img/hamburg.png";
import video from "../assets/img/add-video.png";
import notify from "../assets/img/notification.png";
import user from "../assets/img/user.png";
import search from "../assets/img/search.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/toggleSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { storeCache } from "../utils/SearchCache";

const Header = () => {
  const [suggestedVideo, setSuggestedVideo] = useState("");
  const [suggestedSearchText, setSuggestedSearchText] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchCache = useSelector((store) => store.CacheSerach);
  const dispatch = useDispatch();
  const toggleHamburgerMenu = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[suggestedVideo]) {
        setSuggestedSearchText(searchCache[suggestedVideo]);
      } else {
        getSerachSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [suggestedVideo]);

  const getSerachSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + suggestedVideo);
    const json = await data.json();
    setSuggestedSearchText(json[1]);

    dispatch(
      storeCache({
        [suggestedVideo]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col py-2 px-4 shadow-sm">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleHamburgerMenu()}
          className="h-[38px] mx-2 p-2 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={hamburg}
          alt="sidebar-toggle-button"
        />
        <img className="h-[24px]" src={logo} alt="app-logo" />
      </div>
      <div className="col-span-3"></div>
      <div className="col-span-4 text-center">
        <div>
          <input
            className="w-4/5 p-2 px-6 border border-slate-400 rounded-tl-full rounded-bl-full outline-blue-200"
            type="text"
            name="search"
            value={suggestedVideo}
            placeholder="Serach"
            onChange={(e) => setSuggestedVideo(e.target.value)}
            onFocus={() => setShowSearch(true)}
            // onBlur={() => setShowSearch(false)}
          />
          <button className="p-2 border bg-gray-50 border-l-0  border-slate-400 rounded-tr-full rounded-br-full align-top hover:bg-gray-200">
            <img className="h-[24px] px-3" src={search} alt="" />
          </button>
          {showSearch && (
            <div className="fixed z-20 w-[35%] mx-5 text-center rounded-xl mt-1 bg-white shadow-md shadow-slate-400">
              <ul className="">
                {suggestedSearchText.map((text) => {
                  return (
                    <li
                      key={text}
                      className="flex font-medium mt-1 py-1 px-4 hover:bg-gray-200 hover: cursor-default"
                      onClick={() => setSuggestedVideo(text)}
                    >
                      <img className="h-[20px] my-1 mr-4" src={search} alt="" />
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-3"></div>
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
