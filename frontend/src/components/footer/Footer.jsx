import React from 'react'
import './Footer.css'
import { asstes } from '../../assets/asstes'

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={asstes.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            eligendi quod porro dolorum recusandae adipisci rem nostrum fugiat
            exercitationem maiores. Quae veritatis ducimus ipsa cum!
          </p>
          <div className="footer-social-icons">
            <img src={asstes.facebook_icon} alt="" />
            <img src={asstes.twitter_icon} alt="" />
            <img src={asstes.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delevery</li>
            <li>Pricacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer
