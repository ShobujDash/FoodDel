import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { asstes } from "../../assets/asstes";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/")
  }

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
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={asstes.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                  <img src={asstes.bag_icon} alt="" />
                  <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={asstes.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
