import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";
import './header.css';





function Header () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='header'>
            <div className='logo'></div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            { isLoggedIn?<button className='signStatus' onClick={() => {setIsLoggedIn(false)}}>LogOut</button>:
            <button className='signStatus' onClick={() => {setIsLoggedIn(true)}}>LogIn </button>
            }
        </div>
    );
}

export default Header;