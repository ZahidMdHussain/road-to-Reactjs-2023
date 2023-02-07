import { useSelector } from "react-redux";

const Cart = () => {
    const cartItem = useSelector(store => store.cart.items)
    return (
        <>
        <div className="min-h-[70vh] bg-slate-100 m-8 rounded-lg shadow-xl shadow-slate-300 py-8 px-6">
            <h1 className="font-bold text-3xl font-fsans text-gray-600 underline underline-offset-4">Total Cart Items : {cartItem.length}</h1>
            <div className="p-8 mt-2">
            <h1>skgsdskd</h1>
            </div>
        </div>
        </>   
    )
}

export default Cart;