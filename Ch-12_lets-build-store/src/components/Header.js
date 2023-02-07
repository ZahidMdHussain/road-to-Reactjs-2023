import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";
import logo from "../img/logo.png";
import userContext from "../utils/LoginContext";
import { useSelector } from 'react-redux';


function Header () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {login} = useContext(userContext);

    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className='flex items-center justify-between py-4 px-6 text-slate-500 text-lg shadow-md bg-slate-100 font-sans font-medium'>
            <div className='w-36 h-12  bg-center bg-contain bg-no-repeat'>
                <img className='py-1' src={logo} alt="app-logo" />
            </div>
            <div className="flex items-center">
                <ul className='flex list-none'>
                    <li className='px-4 '>
                    <Link className='hover:text-pink-600 outline-none duration-300 hover:underline hover:underline-offset-4 hover:ease-in-out focus:outline-none' to="/">Home</Link>
                    </li>
                    <li className='px-4 '>
                    <Link className='hover:text-pink-600 outline-none duration-300 hover:underline hover:underline-offset-4 hover:ease-in-out focus:outline-none' to="/about ">About</Link>
                    </li>
                    <li className='px-4 '>
                    <Link className='hover:text-pink-600 outline-none duration-300 hover:underline hover:underline-offset-4 hover:ease-in-out focus:outline-none' to="/contact">Contact</Link>
                    </li>
                    <li className='px-4 '>
                    <Link className='hover:text-pink-600 outline-none duration-500 hover:underline hover:underline-offset-4 hover:ease-in-out focus:outline-none' to="/help">Help</Link>
                    </li>
                    <li className='px-4 '>
                    <Link className='hover:text-pink-600 outline-none duration-300 hover:underline hover:underline-offset-4 hover:ease-in-out focus:outline-none' to="/cart">Cart {cartItems.length}</Link>
                    </li>
                </ul>
            </div>
            <div>
            <h2>{login.username}</h2>
            { isLoggedIn?<button className='px-1 py-[8px] w-16 duration-300 rounded-md hover:text-pink-600 hover:shadow-md hover:shadow-slate-300 hover:ease-in-out' onClick={() => {setIsLoggedIn(false)}}>LogOut</button>:
            <button className='px-1 py-[8px] w-16 duration-300 rounded-md hover:text-pink-600 hover:shadow-md hover:shadow-slate-300 hover:ease-in-out' onClick={() => {setIsLoggedIn(true)}}>LogIn </button>
            }
            </div>
        </div>
    );
}

export default Header;