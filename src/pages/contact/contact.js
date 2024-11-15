import React from "react";
import "./contact.css";
import logo from "../../assets/logo.jpg"; 
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

const Contact = () => {
  return (
    <div>
        <Nav/>
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Reach out with any questions or inquiries.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Get in Touch With Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-image">
          <img src={logo} alt="Contact Us" />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
