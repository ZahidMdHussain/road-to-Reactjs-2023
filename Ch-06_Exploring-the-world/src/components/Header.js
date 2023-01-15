import React from 'react';
import ReactDOM from 'react-dom/client';
import './header.css';

function Header () {
    return (
        <div className='header'>
            <div className='logo'></div>
            <div className="nav-item">
                <ul>
                    <li><a href="#" >Home</a></li>
                    <li><a href="#" >About</a></li>
                    <li><a href="#" >Contact</a></li>
                    <li><a href="#" >Help</a></li>
                    <li><a href="#" >Cart</a></li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;