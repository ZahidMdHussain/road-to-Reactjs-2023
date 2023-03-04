import { img_cdn_path } from "../confiq";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItems } from "../utils/cartSlice";
import { BiCheckboxSquare, BiCaretUpSquare } from "react-icons/bi";
import emptyCart from "../img/emptycart.png";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const price = [];

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const deleteCartItem = (id) => {
    dispatch(removeItems(id));
  };
  return cartItem.length === 0 ? (
    <div className="min-h-[70vh] bg-slate-100 m-8 rounded-lg shadow-xl shadow-slate-300 py-8 px-6 flex justify-center items-center flex-col">
      <img className="w-[500px] bg-center" src={emptyCart}></img>
      <h1 className="mt-4 text-slate-400">Good food is always cooking!</h1>
      <h1 className="text-slate-400">
        Go ahead, order some yummy items from the menu.
      </h1>
    </div>
  ) : (
    <>
      <div className="min-h-[70vh] bg-slate-100 m-8 rounded-lg shadow-xl shadow-slate-300 py-8 px-6">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl font-fsans text-gray-600 underline underline-offset-4">
            Total Cart Items : {cartItem.length}
          </h1>
          <button
            className="bg-[#60b246] p-2 mr-6 text-slate-50 text-lg font-fsans font-semibold rounded-sm hover:shadow-md"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
        <div className="grid grid-flow-col grid-cols-7">
          <div data-testid="cartBox" className="p-8 mt-2 col-span-5">
            {cartItem.map((item) => {
              return (
                <>
                  <div
                    className="flex justify-between items-center p-6 border my-3 border-slate-300 rounded-md"
                    key={item?.id}
                  >
                    <div className="flex items-center">
                      <img
                        className="w-[130px] mx-2 bg-contain shadow-md"
                        src={img_cdn_path + item?.cloudinaryImageId}
                        alt="food-image"
                      />
                      <div className="ml-8 text-base font-medium text-slate-700">
                        <h2 className="text-xl font-semibold line-clamp-1">
                          {item?.name}
                        </h2>
                        <h6 className="font-semibold">
                          Type :{" "}
                          {item?.isVeg == 1 ? (
                            <BiCheckboxSquare className="text-green-700 text-2xl inline" />
                          ) : (
                            <BiCaretUpSquare className="text-red-700 text-lg ml-1 inline" />
                          )}
                        </h6>
                        <h6 className="inline font-semibold">
                          InStock - {item?.inStock == 1 ? "Yes" : "No"}
                        </h6>
                        <h6 className="inline mx-4 font-semibold">
                          Price &nbsp; ₹ {item?.price / 100}
                        </h6>
                      </div>
                    </div>
                    <button
                      className="bg-[#60b246] p-2 mr-6 text-white hover:shadow-md"
                      onClick={() => deleteCartItem(item?.id)}
                    >
                      Remove
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          {cartItem.length === 0 ? null : (
            <div className=" px-10 py-4 my-10 col-span-2  border-l rounded-md">
              <h2 className="text-2xl font-sans font-bold mb-4 text-slate-700">
                {" "}
                Cart :{" "}
                <span className="text-green-500 font-semibold">
                  {cartItem.length} Items
                </span>
              </h2>
              {cartItem.map((item) => {
                return (
                  <>
                    <div
                      className="grid grid-flow-col gap-2 grid-cols-5 px-1 mb-2 tracking-wide text-gray-600"
                      key={item.id}
                    >
                      <h2 className="line-clamp-1 col-span-4">{item?.name}</h2>
                      <h2 className="col-span-1">₹ {item?.price / 100}</h2>
                    </div>
                    <h5 className="hidden">{price.push(item?.price / 100)}</h5>
                  </>
                );
              })}
              <div className="flex justify-between border-t-[1px] mt-2 py-2 text-lg font-semibold text-slate-700">
                <h2>SubTotal</h2>
                <h2>
                  ₹{" "}
                  {price
                    .reduce((partialSum, a) => partialSum + a, 0)
                    .toFixed(2)}
                </h2>
              </div>

              <button className="bg-[#60b246] py-2 px-4 my-3 text-white font-bold tracking-wider font-fsans w-full hover:shadow-md">
                CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
