import React from "react"
import ReactDOM from "react-dom/client"
import "./navbar.css"
import logo from "./img/logo.png"

const Navbar = () => (
    <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <input type="text" placeholder="Serach here.." />
        <div className="user"></div>
    </div>
);

export default Navbar;