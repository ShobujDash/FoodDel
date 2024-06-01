import React, { useState,useContext } from "react";
import { asstes } from "../../assets/asstes";
import {Link} from 'react-router-dom'
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
      <div className="hLogo">
        <Link to="/">
          <img src={asstes.logo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={asstes.search} alt="" className="search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={asstes.busket_icon} alt="" className="busket" />
          </Link>
          <div className={getTotalCartAmount() === 0 ?"":"dot" }></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
