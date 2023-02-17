import React from "react";
import SideMenu from "./SideMenu";
import VideosContainer from "./VideosContainer";

const Main = () => {
  return (
    <div className="flex">
      <SideMenu />
      <VideosContainer />
    </div>
  );
};

export default Main;
