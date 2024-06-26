"use client";

import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "../pages/homepage";
import Shop from "../pages/shop";
import About from "../pages/about.js";
import Cart from "../pages/cart";
import Login from "./login";
import Signup from "./signup";
import SearchBar from "../components/search-bar";
import Image from "next/image";
import "../styles/nav-bar.css";

const NavBar = () => {
    const navigate = useNavigate();
    const [isSearchVisible, setSearchVisible] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleSearch = (query) => {
        navigate(`/search?q=${query}`);
    }

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    return (
        <header>
            <div className="scrolling-bar">
                Free delivery for purchases of $50 or over! Only in Calgary!
            </div>
            <div className="navbar">
                <div className="leftSide">
                    <a href="/">
                    <img src="/icons/logo.png" alt="Esmeraldus Colombian Coffee" width="110" height="110" />
                    </a>

                    <div className="rightSide text-navbar">
                        <button onClick={() => handleNavigation("/")}>Home<span className="expandIcon"></span></button>
                        <button onClick={() => handleNavigation("/shop")}>Shop<span className="expandIcon"></span></button>
                        <button onClick={() => handleNavigation("/about")}>About<span className="expandIcon"></span></button>
                        <button onClick={() => handleNavigation("/cart")}>Cart<span className="expandIcon"></span></button>
                    </div>
  
                    <div className="bottom-right">
                    <SearchBar className="search-button" onSearch={handleSearch} /> 
                    </div>  
                    
                    <div className="top-right">
                        <button className="login-nav-bar" onClick={() => handleNavigation("/login")}>Log in</button>
                        {/* <button className="sign-up-nav-bar" onClick={() => handleNavigation("/signup")}>Sign Up</button> */}
                    </div>   
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>

        </header>
    );
};

export default NavBar;
