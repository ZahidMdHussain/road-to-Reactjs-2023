import React from "react";
import { sidemenu } from "../utils/config";

const SideMenu = () => {
  return (
    <div>
      <div>
        {sidemenu.map((item) => {
          return (
            <div className="flex" key={item.menuId}>
              <img src={item.img} alt="" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
