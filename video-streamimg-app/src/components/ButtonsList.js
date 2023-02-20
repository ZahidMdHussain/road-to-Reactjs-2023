import React from "react";

const ButtonsList = () => {
  return (
    <div>
      <ul className="flex justify-start items-center my-2">
        <li className="tracking-wide px-4 py-2 mx-2 text-sm rounded-md font-semibold text-white bg-black hover:cursor-pointer">
          All
        </li>
        <li className="tracking-wide px-4 py-2 mx-2 text-sm rounded-md font-semibold bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
          Live
        </li>
        <li className="tracking-wide px-4 py-2 mx-2 text-sm rounded-md font-semibold bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
          Music
        </li>
        <li className="tracking-wide px-4 py-2 mx-2 text-sm rounded-md font-semibold bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
          Lo-fi
        </li>
        <li className="tracking-wide px-4 py-2 mx-2 text-sm rounded-md font-semibold bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
          News
        </li>
        <li className="tracking-wide px-4 py-2 mx-2 text-sm rounded-md font-semibold bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
          Gaming
        </li>
        <li className="tracking-wide px-4 py-2 mx-2 text-sm rounded-md font-semibold bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
          Mixes
        </li>
      </ul>
    </div>
  );
};

export default ButtonsList;
