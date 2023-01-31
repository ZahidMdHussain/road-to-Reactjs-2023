import React from 'react';
import ReactDOM from 'react-dom/client';

function Footer () {
    return (
        <div className='bg-black flex px-12 py-8 mt-4 justify-evenly text-slate-100 font-fsans'>
            <ul className='list-none'>
                <li className='py-1 font-bold mb-4 text-gray-400'>COMPANY</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>About us</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Team</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Careers</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Blog</li>
            </ul>
            <ul className='list-none'>
                <li className='py-1 font-bold mb-4 text-gray-400'>CONTACT</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Help & Support</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Partner with us</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Ride with us</li>
            </ul>
            <ul className='list-none '>
                <li className='pl-1 font-bold mb-4  text-gray-400'>LEGAL</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Term & Conditions</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Refund & Cancellation</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Privacy Policy</li>
                <li className='py-1 hover:cursor-pointer hover:font-semibold hover:text-white'>Phishing & Fraud</li>
            </ul>
            <ul className='list-none mr-0'>
                <li className='py-1 font-bold mb-4 text-slate-400 hover:cursor-default'></li>
                <li className='py-2 hover:scale-110 hover:ease-in-out hover:cursor-pointer duration-500'><img  className='w-36' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App store" /></li>
                <li className='py-2 hover:scale-110 hover:ease-in-out hover:cursor-pointer duration-500'><img className='w-36' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Play store" /></li>
            </ul>
        </div>
    );
}

export default Footer;