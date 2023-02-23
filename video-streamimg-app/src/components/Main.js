import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const Main = () => {
  return (
    <div className="flex">
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Main;
