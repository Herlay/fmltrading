import React from "react";
import "./about.css";
import logo from "../../assets/logo.jpg"; 
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

const About = () => {
  return (
    <div>
        <Nav/>
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>FML Trading</strong>, your trusted partner in agricultural product sourcing, 
            import/export, logistics, and business growth solutions. With a global reach and 
            a commitment to excellence, we connect businesses with premium quality goods 
            and innovative services designed to propel success.
          </p>
          <p>
            Our expertise spans areas such as trade finance, marketing, and strategic market 
            research. At FML Trading, we aim to make international trade seamless, reliable, 
            and accessible for enterprises of all sizes.
          </p>
          <p>
            Partner with us and discover how our solutions can transform your business 
            operations and create lasting success.
          </p>
        </div>
      </div>
    </div>
    <div className="foot">
    <Footer/>
    </div>
    </div>
  );
};

export default About;
