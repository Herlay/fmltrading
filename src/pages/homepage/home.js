import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Navbar from "../../components/nav/nav";
import { useRef } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { FaXTwitter } from "react-icons/fa6";
import { useTypewriter } from "react-simple-typewriter";

import Offer1 from "../../assets/commodity.png";
import Offer2 from "../../assets/research.png";
import Offer3 from "../../assets/growth.png";
import Offer4 from "../../assets/trade.png";
import Offer5 from "../../assets/transportation.png";
import Offer6 from "../../assets/export.png";

import choose1 from "../../assets/analytics.png"
import choose2 from "../../assets/distribution.png"
import choose3 from "../../assets/pin.png"
import choose4 from "../../assets/investment.png"
import choose6 from "../../assets/trade1.png"

import caro1 from "../../assets/crops/maize.jpg"
import caro2 from "../../assets/crops/sheaNut.jpg"
import caro3 from "../../assets/crops/hibiscus.jpg"
import caro4 from "../../assets/crops/ginger.jpg"
import caro5 from "../../assets/crops/soyabean.jpg"
import caro6 from "../../assets/crops/unprocessed.jpg"
import caro7 from "../../assets/crops/sesame.jpg"
import caro8 from "../../assets/crops/kernelShell.jpg"

import Catalog from "../catalog/catalog";
import Footer from "../../components/footer/footer";

const Home = () => { 
  const [typeEffect] = useTypewriter({
    words: [
      "Agricultural Products Sourcing",
      "Import/Export",
      "Marketing and Research",
      "Business Development",
      "Trade Finance/Bank Instruments",
      "Logistics", ],
    loop: { Infinity },
    typeSpeed: 100,
    deleteSpeed: 10,
  });



  // Reference to the carousel container
  const catalogCarouselRef = useRef(null);
  
  // Function to scroll the carousel by a specified amount
  const scrollCatalogCarousel = (direction) => {
    if (catalogCarouselRef.current) {
      const scrollAmount = catalogCarouselRef.current.offsetWidth; // Scroll by full container width
      catalogCarouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount, // Scroll left or right
        behavior: "smooth",
      });
    }
  };
  
  // Infinite scroll handler that ensures the carousel restarts at the beginning
  const handleInfiniteScroll = () => {
    if (catalogCarouselRef.current) {
      const scrollWidth = catalogCarouselRef.current.scrollWidth;  // Total scrollable width
      const clientWidth = catalogCarouselRef.current.clientWidth;  // Visible area width
      const scrollLeft = catalogCarouselRef.current.scrollLeft;    // Current scroll position
  
      // If the carousel reaches the end, reset to the beginning
      if (scrollLeft + clientWidth >= scrollWidth) {
        catalogCarouselRef.current.scrollLeft = 0; // Reset to start
      }
    }
  };
  
  // Automatically scroll the carousel every 3 seconds and check for infinite scrolling
  useEffect(() => {
    const autoScroll = setInterval(() => {
      scrollCatalogCarousel("next"); // Scroll to the next item
      handleInfiniteScroll(); // Check for infinite loop
    }, 3000); // Adjust the time as needed for scrolling speed (3 seconds)
  
    // Clear the interval when the component is unmounted
    return () => clearInterval(autoScroll);
  }, []);
  


  return (
    <section>
      <Navbar />

      <div className="homeFlyerContainer flex-center wrap">
        <div className="homeTextContainer">
          <h1>FML <span>TRADING</span></h1>
          <h3>WE PROVIDE OUR CLIENTS WITH</h3>
          <h4>{typeEffect}</h4>
          {/* <div className="htmBtnContainer">
            <Link to=""> <FaWhatsapp color="white" size={45}/></Link>
            <Link to=""> <MdOutlineMailOutline color="white" size={45}/></Link>
            <Link to=""> <FaXTwitter color="white" size={45}/></Link>
          </div> */}
        </div>
      </div>

     
      <div className="catSection">
        <h1>WHAT WE OFFER</h1>
        <div className="categoryContainer flex-center gap-20 wrap">
          <div className="categoryCard grid">
            <div className="catImgContainer">
              <img src={Offer1} alt="Currency Wallet" className="catImg" />
            </div>
            <h2 className="cath2">Agricultural Products Sourcing</h2>
          </div>

          <div className="categoryCard grid">
            <div className="catImgContainer">
              <img src={Offer2} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Marketing and Research</h2>
          </div>

          <div className="categoryCard grid">
            <div className="catImgContainer" id="contact"> 
              <img src={Offer6} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Import/Export</h2>
          </div>
         
          <div className="categoryCard grid">
            <div className="catImgContainer" id="contact"> 
              <img src={Offer3} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Business Development</h2>
          </div>

          <div className="categoryCard grid">
            <div className="catImgContainer" id="contact"> 
              <img src={Offer4} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Trade Finance</h2>
          </div>
      
          <div className="categoryCard grid">
            <div className="catImgContainer" id="contact"> 
              <img src={Offer5} alt="img" className="catImg" />
            </div>
            <h2 className="cath2">Logistics</h2>
          </div>
        </div>
      </div>



      <p className="catalogP">FML TRADING SOURCE AND EXPORT PRODUCTS</p>
      
      <div className="catalog-carousel-container">
        <button
          className="carousel-button prev"
          onClick={() => scrollCatalogCarousel("prev")}
        >
          &#10094;
        </button>
        <div className="carousel" ref={catalogCarouselRef}>
          <div className="carousel-track">
            <div className="catalogCard">
              <img src={caro1} alt="Catalog Item 1" className="catalogImg" />
              <h2>YELLOW MAIZE(CORN)</h2>
              <p>Yellow Corn Maize(corn) from West Africa</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
           </div>
            
            <div className="catalogCard">
              <img src={caro2} alt="Catalog Item 2" className="catalogImg" />
              <h2>SHEA NUT</h2>
              <p>Processing - Sund-dried</p>
              <p>Oil Content - 45 to 51%</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link>
            </div>

            <div className="catalogCard">
              <img src={caro3} alt="Catalog Item 3" className="catalogImg" />
              <h2>HIBISCUS FLOWER</h2>
              <p>Form - Raw Material</p>
              <p>Grade- A</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link>
            </div>

            <div className="catalogCard">
              <img src={caro4} alt="Catalog Item 3" className="catalogImg" />
              <h2>DRY SPLIT GINGER</h2>
              <p>Origin - Nigeria</p>
              <p>Product Type - Dry Split Ginger</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

            <div className="catalogCard">
              <img src={caro5} alt="Catalog Item 3" className="catalogImg" />
              <h2>SOYA BEANS</h2>
              <p>Protein - 38% min on dry basis</p>
              <p>Oil - 21% min</p> 
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

            <div className="catalogCard">
              <img src={caro6} alt="Catalog Item 3" className="catalogImg" />
              <h2>UNPROCESSED TEAK WOOD</h2>
              <p>Parameter,Typical Value/Range</p>
              <p>Species,Tectona grandis</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

            <div className="catalogCard">
              <img src={caro7} alt="Catalog Item 3" className="catalogImg" />
              <h2>SESAME SEED</h2>
              <p>Packing Size - 50kg bags</p>
              <p>Origin- West Africa</p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

            <div className="catalogCard">
              <img src={caro8} alt="Catalog Item 4" className="catalogImg" />
              <h2>PALM KERNEL SHELLS</h2>
              <p>Color,Dark brown to black</p>
              <p>Origin:Nigeria,Thailand,Indonesia </p>
              <Link to="/catalog" className="links"><p>See More...</p></Link> 
            </div>

    
      </div>
        </div>
        <button
          className="carousel-button next"
          onClick={() => scrollCatalogCarousel("next")}
        >
          &#10095;
        </button>
      </div>
      




<h1 className="choose">WHY CHOOSE US </h1>
<div className="choosecategoryContainer flex-center gap-20 wrap">

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose3} alt="Global Sourcing Expertise" className="choosecatImg"/>
        </div>
        <h1>Global Sourcing Expertise</h1>
        <p>At FML Trading, we excel in sourcing premium agricultural products from trusted suppliers worldwide. Our deep market knowledge ensures you get quality products with ease and reliability.</p>
    </div>

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose1} alt="Innovative Market Research" className="choosecatImg"/>
        </div>
        <h1>Innovative Market Research</h1>
        <p>Our team conducts thorough market analysis to provide insights that drive business growth. We equip you with the data you need to make informed strategic decisions.</p>
    </div>

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose4} alt="Business Development Support" className="choosecatImg"/>
        </div>
        <h1>Business Development Support</h1>
        <p>We’re dedicated to helping your business expand, offering tailored strategies and solutions that maximize your market potential and growth opportunities.</p>
    </div>

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose6} alt="Reliable Trade Finance" className="choosecatImg"/>
        </div>
        <h1>Reliable Trade Finance</h1>
        <p>Our trade finance solutions provide secure, flexible funding options, including bank instruments, to help you scale operations and meet financial needs with confidence.</p>
    </div>

    <div className="choosecategoryCard grid">
        <div className="choosecatImgContainer">
            <img src={choose2} alt="Efficient Logistics" className="choosecatImg"/>
        </div>
        <h1>Efficient Logistics</h1>
        <p>With our efficient logistics solutions, we ensure that your products move seamlessly across borders, reducing transit times and optimizing costs for a hassle-free experience.</p>
    </div>
  

</div>



        {/* <div className="" id="about">
                <About/>
        </div> */}
 
      {/* <div className="contactSection">
        <h1>Contact Us</h1>
        <form className="contactForm" id="contact">
          <div className="formGroup">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submitButton">Send Message</button>
        </form>
      </div> */}
      <Footer/>

    </section>
  );
};

export default Home;
