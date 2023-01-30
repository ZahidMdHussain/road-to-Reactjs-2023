import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";
import logo from "../img/logo.png";






function Header () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='flex items-center justify-between py-2 px-6 text-slate-500 text-sm shadow-md bg-slate-100 font-sans font-semibold'>
            <div className='w-36 h-12  bg-center bg-contain bg-no-repeat'>
                <img className='py-1' src={logo} alt="app-logo" />
            </div>
            <div className="flex items-center">
                <ul className='flex list-none'>
                    <li className='px-4 hover:text-pink-600 hover:underline hover:underline-offset-4 hover:ease-in-out'><Link to="/">Home</Link></li>
                    <li className='px-4 hover:text-pink-600 hover:underline hover:underline-offset-4 hover:ease-in-out'><Link to="/about">About</Link></li>
                    <li className='px-4 hover:text-pink-600 hover:underline hover:underline-offset-4 hover:ease-in-out'><Link to="/contact">Contact</Link></li>
                    <li className='px-4 hover:text-pink-600 hover:underline hover:underline-offset-4 hover:ease-in-out'><Link to="/help">Help</Link></li>
                    <li className='px-4 hover:text-pink-600 hover:underline hover:underline-offset-4 hover:ease-in-out'><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            { isLoggedIn?<button className='signStatus' onClick={() => {setIsLoggedIn(false)}}>LogOut</button>:
            <button className='signStatus' onClick={() => {setIsLoggedIn(true)}}>LogIn </button>
            }
        </div>
    );
}

export default Header;