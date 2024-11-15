import React from "react";
import logo from "../../assets/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { SiInstagram } from "react-icons/si";


import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
        <img src={logo} alt="logo"/>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/catalog">Catalog</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: .com</p>
          <p>Phone: 000000</p>
          <p>Address: No....</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className=""><FaFacebookF /></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className=""><BsTwitterX /></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className=""><SiWhatsapp /></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className=""><SiInstagram /></i>
            </a>
          </div>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>© 2024 FMLTrading. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
