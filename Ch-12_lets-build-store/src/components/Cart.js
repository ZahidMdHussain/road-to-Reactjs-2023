import { img_cdn_path } from "../confiq";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItems } from "../utils/cartSlice";

const Cart = () => {
    const cartItem = useSelector(store => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const deleteCartItem = (id) => {
        console.log(id)
        dispatch(removeItems(id));
        
    }
    return (
        <>
        <div className="min-h-[70vh] bg-slate-100 m-8 rounded-lg shadow-xl shadow-slate-300 py-8 px-6">
            <div className="flex justify-between">
            <h1 className="font-bold text-3xl font-fsans text-gray-600 underline underline-offset-4">Total Cart Items : {cartItem.length}</h1>
            <button className="bg-red-500 p-2 mr-6 text-slate-50 text-lg font-semibold rounded-sm" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
            <div className="flex justify-between">
            <div className="p-8 mt-2  w-3/4">
            {cartItem.map((item) => {
             return (
                <>
                <div className="flex justify-between items-center p-4 border my-2 border-black
                " key={item.id}>
                    <div className="flex items-center">
                    <img className="w-[130px] mx-2 bg-contain" src={img_cdn_path+item?.cloudinaryImageId} alt="resturant-image" />
                    <div className="mx-4">
                    <h2>{item?.name}</h2>
                    <h6>FoodType {(item.isVeg==1?"Veg":"Non-Veg")}</h6>
                    <h6 className="inline">InStock - {(item.inStock==1)?"Yes":"No"}</h6>
                    <h6 className="inline mx-4">Price - {item.price/100}</h6>
                    </div>
                    </div>
                    <button className="bg-green-300 p-2 mr-6" onClick={() => deleteCartItem(item.id)}>Remove</button>
                </div>
                </>
             )
            })}
            </div>
            <div className=" px-8 py-4 mt-12  w-[300px] h-[200px] border-l border-black">
                <h2>Total Amount:</h2>
            </div>
            </div>
        </div>
        </>   
    )
}

export default Cart;