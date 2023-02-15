import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import userContext from "../utils/LoginContext";
import { useSelector } from "react-redux";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { login } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between py-4 px-6 text-slate-500 text-lg shadow-md bg-slate-100 font-sans font-medium">
      <div className="w-36 h-12  bg-center bg-contain bg-no-repeat">
        <img data-testid="logo" className="py-1" src={logo} alt="app-logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex list-none">
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 rounded-sm outline-none duration-300 hover:bg-[#ff4057] hover:text-white hover:ease-in-out focus:outline-none"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 rounded-sm outline-none duration-300 hover:bg-[#ff4057] hover:text-white hover:ease-in-out focus:outline-none"
              to="/about "
            >
              About
            </Link>
          </li>
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 rounded-sm outline-none duration-300 hover:bg-[#ff4057] hover:text-white hover:ease-in-out focus:outline-none"
              to="/help"
            >
              Help
            </Link>
          </li>
          <li className="pl-2">
            <Link
              className="text-[#ff4057] px-2 rounded-sm outline-none duration-300 hover:bg-[#ff4057] hover:text-white hover:ease-in-out focus:outline-none"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li>
            <span
              data-testid="cart"
              className="bg-[#60b246] px-[4] text-xs font-bold text-white align-top rounded-md"
            >
              {cartItems.length}
            </span>
          </li>
        </ul>
      </div>
      <div>
        {/* <h2>{login.username}</h2> */}
        {isLoggedIn ? (
          <button
            className="px-1 py-[8px] w-fit duration-300 rounded-md hover:shadow-md hover:shadow-slate-400 hover:ease-in-out"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Hi!&nbsp;{login.username}
          </button>
        ) : (
          <Link to="/login">
            <button
              className="text-[#ff4057] px-1 py-[8px] w-16 duration-300 rounded-md hover:shadow-md hover:shadow-[#ff4057] hover:ease-in-out"
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              LogIn
              {(login.username = "")}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
