import React from 'react';
import ReactDOM from 'react-dom/client';
import './footer.css';

function Footer () {
    return (
        <div className='footer'>
            <ul>
                <li>COMPANY</li>
                <li>About us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
            <ul>
                <li>CONTACT</li>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
            </ul>
            <ul>
                <li>LEGAL</li>
                <li>Term & Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
                <li>Phishing & Fraud</li>
            </ul>
            <ul className='download-here'>
                <li></li>
                <li><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App store" /></li>
                <li><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Play store" /></li>
            </ul>
        </div>
    );
}

export default Footer;