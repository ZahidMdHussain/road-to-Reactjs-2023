import { img_cdn_path } from "../confiq";
import { AiFillStar } from "react-icons/ai";

function Card({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) {
  return (
    <div className="my-4 mx-6 max-w-[300px] px-4 pt-4 border border-white no-underline text-black hover:border-[#ccc] hover:shadow-md font-fsans">
      <img
        className="w-full mb-4 shadow-lg"
        src={img_cdn_path + cloudinaryImageId}
        alt="food_img"
      />
      <h3 className="text-lg font-bold text-gray-700">{name}</h3>
      <h5 className="py-2 font-medium text-gray-700">{cuisines.join(", ")}</h5>
      <div className="py-4 flex justify-between items-center text-sm font-semibold border-b border-[#ccc] text-gray-600">
        <p
          className={`flex justify-between items-center ${
            +avgRating >= 4 ? "bg-[#48c479]" : "bg-[#db7c38]"
          }  py-[1px] px-1 text-white`}
        >
          <span className="align-baseline">
            <AiFillStar className="inline" />
          </span>
          <span className="align-baseline pl-[2px]">{avgRating}</span>
        </p>
        <p>{deliveryTime} MINS</p>
        <p>{costForTwoString}</p>
      </div>
      <p className="w-full text-center font-fsans">
        <span
          className="block py-4 text-[#38a4eb] no-underline font-bold text-base hover:text-[#48c479]"
          href="#"
        >
          QUICK VIEW
        </span>
      </p>
    </div>
  );
}

export default Card;
