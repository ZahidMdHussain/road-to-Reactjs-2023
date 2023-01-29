import { img_cdn_path} from '../confiq';

function Card({cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwoString}) {
    return (
            <div className='card'>
                <img src={img_cdn_path+cloudinaryImageId} alt="food_img" />
                <h3>{name}</h3>
                <h5 className='cousine'>{cuisines.join(", ")}</h5>   
                <div className='card-subdivision'>
                    <p><span>⭐</span>{avgRating}</p>
                    <p>{deliveryTime} MINS</p>
                    <p>{costForTwoString}</p>
                </div>
                <p className='anchor'><span href="#">QUICK VIEW</span></p>
            </div>
    )
}

export default Card;