import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from "react-icons/md";
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-heading">G lovely</h2>
            <p className="footer-text"><i className="fas fa-map-marker-alt"></i> Address: No 40 Baria Street 133/2, Pakistan, Karachi.</p>
            <p className="footer-text"> 
              <span>Phone </span>
              <BsTelephoneFill className="footer-icon" />
              : +92 123 456 789
            </p>
            <p className="footer-text">
              <span>Email </span>
              <MdOutlineEmail className="footer-icon" />
              : giftnaaz@gmail.com
            </p>
            <div className="footer-email">
              <input type="email" placeholder="Enter your email" className="footer-email-input" />
              <button className="footer-email-button">Subscribe</button>
            </div>
          </div>
          <div className="footer-section">
            <h2 className="footer-heading">My Account</h2>
            <ul className="footer-list">
              <li><i className="footer-list-icon fas fa-circle"></i>Checkout</li>
              <li><i className="footer-list-icon fas fa-circle"></i>My Account</li>
              <li><i className="footer-list-icon fas fa-circle"></i>My Orders</li>
              <li><i className="footer-list-icon fas fa-circle"></i>My Credit Slips</li>
              <li><i className="footer-list-icon fas fa-circle"></i>My Addresses</li>
              <li><i className="footer-list-icon fas fa-circle"></i>My Personal Info</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-heading">Information</h2>
            <ul className="footer-list">
              <li><i className="footer-list-icon fas fa-circle"></i>Specials</li>
              <li><i className="footer-list-icon fas fa-circle"></i>New Products</li>
              <li><i className="footer-list-icon fas fa-circle"></i>Best Sellers</li>
              <li><i className="footer-list-icon fas fa-circle"></i>Our Stores</li>
              <li><i className="footer-list-icon fas fa-circle"></i>Contact Us</li>
              <li><i className="footer-list-icon fas fa-circle"></i>Secure Payment</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-yellow">
        <p>
          Every gift tells a story, every smile shares our love. 🎁 <br />Thank you for choosing us! 😊
        </p>
      </div>
    </div>
  );
};

export default Footer;
