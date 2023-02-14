import { img_cdn_path} from '../confiq';
import { AiFillStar } from "react-icons/ai";

function Card({cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwoString}) {
    return (
            <div className='card'>
                <img src={img_cdn_path+cloudinaryImageId} alt="food_img" />
                <h3>{name}</h3>
                <h5 className='cousine'>{cuisines.join(", ")}</h5>   
                <div className='card-subdivision'>
                    <p className={`flex justify-between items-center ${+avgRating >= 4 ? 'bg-[#48c479]' : 'bg-[#db7c38]'}  py-[1px] px-1 text-white`}><span className='align-baseline'><AiFillStar className='inline' /></span>
                    <span className='align-baseline pl-[2px]'>{avgRating}</span></p>
                    <p>{deliveryTime} MINS</p>
                    <p>{costForTwoString}</p>
                </div>
                <p className='anchor'><span href="#">QUICK VIEW</span></p>
            </div>
    )
}

export default Card;