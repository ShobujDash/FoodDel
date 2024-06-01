import React, { useState } from "react";
import { asstes } from "../../assets/asstes";
import "./LoginPopup.css";

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={asstes.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your emial" required />
          <input type="password" placeholder="Your password" required />
        </div>

        <button>{currState === "Sign Up" ? "Create accout" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By containuing , i agree to the terms of use & privacy policy</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span>{" "}
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
