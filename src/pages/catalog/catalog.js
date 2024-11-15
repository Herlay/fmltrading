import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import "./catalog.css";
import pic1 from "../../assets/crops/maize.jpg"
import pic2 from "../../assets/crops/soyabean.jpg"
import pic3 from "../../assets/crops/ginger.jpg"
import pic3a from "../../assets/crops/ginger2.jpg"
import pic4 from "../../assets/crops/unprocessed.jpg"
import pic5 from "../../assets/crops/processed2.jpg"
import pic6 from "../../assets/crops/sesame.jpg"
import pic7 from "../../assets/crops/kernelShell.jpg"
import pic8 from "../../assets/crops/kernelNut.jpg"
import pic9 from "../../assets/crops/whiteMaize.jpg"
import pic10 from "../../assets/crops/sorgh.jpg"
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';

const Catalog = () => {
  const previewContainerRef = useRef(null);

  useEffect(() => {
    const preveiwContainer = previewContainerRef.current;
    if (!preveiwContainer) return;

    const previewBoxes = preveiwContainer.querySelectorAll('.preview');

    const products = document.querySelectorAll('.products-container .product');
    products.forEach(product => {
      product.onclick = () => {
        const name = product.getAttribute('data-name');
        preveiwContainer.style.display = 'flex';

        previewBoxes.forEach(preview => {
          const target = preview.getAttribute('data-target');
          if (name === target) {
            preview.classList.add('active');
          } else {
            preview.classList.remove('active');
          }
        });
      };
    });


    previewBoxes.forEach(preview => {
      const closeBtn = preview.querySelector('.close-icon');
      if (closeBtn) {
        closeBtn.onclick = () => {
          preview.classList.remove('active');
          preveiwContainer.style.display = 'none';
        };
      }
    });

    return () => {
      products.forEach(product => (product.onclick = null));
      previewBoxes.forEach(preview => {
        const closeBtn = preview.querySelector('.close-icon');
        if (closeBtn) closeBtn.onclick = null;
      });
    };
  }, []);

  return (
    <div>
        <Navbar/>
      <div className="container">
        <h3 className="title">FML TRADING SOURCE AND EXPORT PRODUCTS CATALOG</h3>

        <div className="products-container">
          <div className="product" data-name="p-1">
            <img src={pic1} alt="img"/>
            <h3>Yellow Maize(Corn)</h3>
          </div>

          <div className="product" data-name="p-9">
          <img src={pic9} alt="img"/>
          <h3>WHITE MAIZE (Corn)</h3>
          </div>

          <div className="product" data-name="p-2">
          <img src={pic2} alt="img"/>
          <h3>SOYA BEANS</h3>
          </div>

          <div className="product" data-name="p-3">
          <img src={pic3} alt="img"/>
          <h3>DRY SPLIT GINGER</h3>
          </div>

          <div className="product" data-name="p-4">
          <img src={pic4} alt="img"/>
          <h3>UNPROCESSED TEAK WOOD</h3>
          </div>

          <div className="product" data-name="p-5">
          <img src={pic5} alt="img"/>
          <h3>PROCESSED TEAK WOOD</h3>
          </div>
        
          <div className="product" data-name="p-6">
          <img src={pic6} alt="img"/>
          <h3>SESAME SEED</h3>
          </div>

          <div className="product" data-name="p-7">
          <img src={pic7} alt="img"/>
          <h3>PALM KERNEL SHELL</h3>
          </div>
          
          <div className="product" data-name="p-8">
          <img src={pic8} alt="img"/>
          <h3>PALM KERNEL NUTS</h3>
          </div>

          <div className="product" data-name="p-10">
          <img src={pic10} alt="img"/>
          <h3>PALM KERNEL NUTS</h3>
          </div>
          
     
        </div>
      </div>

      <div ref={previewContainerRef} className="products-preview">
        <div className="preview" data-target="p-1">
          <FaTimes className="close-icon" size={40} />
          <img src={pic1} alt="img"/>
          <h3>Speculations Yellow Maize(Corn) from West Africa</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1.   Moisture Content: 12-14% max</i>
            <i className="fas fa-star-half-alt">2.   Purity: 98-99% minimum</i>
            <i className="fas fa-star-half-alt">3.   Foreign Matter: 1-2% max</i>
            <i className="fas fa-star-half-alt">4.   Broken Kemels: 2-3% max</i>
            <i className="fas fa-star-half-alt">5.   Aflatoxin: 20 ppb (parts per billons) </i>
            <i className="fas fa-star-half-alt">6.  Damaged Kernels: 3-5% max</i>
            <i className="fas fa-star-half-alt">7.  Insect Damaged Kernels: 1-2% max</i>
            <i className="fas fa-star-half-alt">8.  Protein</i>
            <i className="fas fa-star-half-alt">9.  Crude Fiber: 2-3% max</i>
            <i className="fas fa-star-half-alt">10. Oil Content: -3-5% </i>
            <i className="fas fa-star-half-alt">11. Color: Yellow</i>
            <i className="fas fa-star-half-alt">12. Odor: Fresh, free from sour or usty odors</i>
            <i className="fas fa-star-half-alt">13. Packing: Typically in 50kg or 100kg bags</i>
            <i className="fas fa-star-half-alt">14. Payment Terms - Cash or Bank Instrument</i>
            <i className="fas fa-star-half-alt">15. Origin - West Africa</i>
            <i className="fas fa-star-half-alt">16. Quantity - 10,000mt+</i>
            <i className="fas fa-star-half-alt">17. Loading Port - West African Pots</i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-9">
        <FaTimes className="close-icon" size={40} />
          <img src={pic9} alt="img"/>
          <h3>SPECIFICATIONS FOR WHITE MAIZE</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Moisture Content,Max 12-14%</i>
            <i className="fas fa-star-half-alt">2. Crude Protein,8-10%</i>
            <i className="fas fa-star-half-alt">3.  Crude Fat,3-5%</i>
            <i className="fas fa-star-half-alt">4. Crude Fiber,2-3%</i>
            <i className="fas fa-star-half-alt">5. Starch Content,60-70%</i>
            <i className="fas fa-star-half-alt">6. Ash Content,Max 1.5%</i>
            <i className="fas fa-star-half-alt">7. Color,White</i>
            <i className="fas fa-star-half-alt">8. Test Weight,72-78 kg/hl  </i>
            <i className="fas fa-star-half-alt">9.Impurities,Max 2% (other seeds, dirt, etc.)</i>
            <i className="fas fa-star-half-alt">10.Shelf Life,6-12 months (if stored properly)</i>
            <i className="fas fa-star-half-alt">11. Quantity:5000mt  </i>
            <i className="fas fa-star-half-alt">12. Payment Terms: Cash or bank instrument  </i>
            <i className="fas fa-star-half-alt">13. Origin:Nigeria,Brazil,South Africa </i>
            <i className="fas fa-star-half-alt">14. Loading port: Togo, Nigeria</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-2">
        <FaTimes className="close-icon" size={40} />
          <img src={pic2} alt="img"/>
          <h3>SPECIFICATIONS FOR SOYA BEANS</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1.   2024 Crop</i>
            <i className="fas fa-star-half-alt">2.   Protein: 38% min on dry basis</i>
            <i className="fas fa-star-half-alt">3.   Green/black/blue/damaged /dead/foreign seeds: 1% max </i>
            <i className="fas fa-star-half-alt">4.   Moisture: 10% max</i>
            <i className="fas fa-star-half-alt">5.   Grade: Grade A </i>
            <i className="fas fa-star-half-alt">6.   Leaf /twigs: 0.5% max</i>
            <i className="fas fa-star-half-alt">7.   Soil /stone: 1.5% max</i>
            <i className="fas fa-star-half-alt">8.   Insects: 0.0% dead or alive, weevil free.</i>
            <i className="fas fa-star-half-alt">9.   Origin:Nigeria,Niger,Burkina faso </i>
            <i className="fas fa-star-half-alt">10.  Loading port: Nigeria and Togo port. </i>
            <i className="fas fa-star-half-alt">11.  MOQ: 5000mt </i>
            <i className="fas fa-star-half-alt">12.  Incoterms: fob </i>
            <i className="fas fa-star-half-alt">13.  PACKING: new 50kgs pp bags</i>
            <i className="fas fa-star-half-alt">   1*20 feet container loads 22mts, 1*40 feet container loads 28mts.</i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-3">
        <FaTimes className="close-icon" size={40} />
          <img src={pic3a} alt="img"/>
          <h3>SPECIFICATIONS FOR DRY SPLIT GINGER</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1.   Origin: Nigeria</i>
            <i className="fas fa-star-half-alt">2.   Product Type: Dry Split Ginger </i>
            <i className="fas fa-star-half-alt">3.  Quantity: 1000mt+</i>
            <i className="fas fa-star-half-alt">4.   Trial Order: two containers.</i>
            <i className="fas fa-star-half-alt">5.   Trade Process: CIF</i>
            <i className="fas fa-star-half-alt">6.   Payment Method:Fully cash backed 100% irrevocable,divisible,transferable and confirmable L/C at sight</i>
            <i className="fas fa-star-half-alt">7.   Shipping Time: 15 to 25 days after confirmation of L/C </i>
            <i className="fas fa-star-half-alt">8.  Loading Port: Lagos, Nigeria</i>
            <i className="fas fa-star-half-alt">9.   Type: FAQ & ASTA</i>
            <i className="fas fa-star-half-alt">10.  Impurities: Maximum of 2% </i>
            <i className="fas fa-star-half-alt">11.  Moisture Content: Maximum of 10%</i>
            <i className="fas fa-star-half-alt">12. Drying Process: Sun-dried </i>
            <i className="fas fa-star-half-alt">13.  Inspection: SGS</i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-4">
        <FaTimes className="close-icon" size={40} />
          <img src={pic4} alt="img"/>
          <h3>SPECIFICATIONS FOR UNPROCESSED TEAK WOOD</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Species,Tectona grandis</i>
            <i className="fas fa-star-half-alt">2.  Moisture Content,15-25% (freshly cut)  </i>
            <i className="fas fa-star-half-alt">3.  Density,600-800 kg/m³ (varies with moisture content) </i>
            <i className="fas fa-star-half-alt">4.   Color,Light golden to dark brown</i>
            <i className="fas fa-star-half-alt">5.   Grain Pattern,Straight with a fine, even texture </i>
            <i className="fas fa-star-half-alt">6.   Durability,Highly durable (Class 1), resistant to decay and pests</i>
            <i className="fas fa-star-half-alt">7.  Natural Oil Content,High; contributes to natural resistance to water and pests</i>
            <i className="fas fa-star-half-alt">8.   Dimensions,Various; commonly available in logs (lengths vary)</i>
            <i className="fas fa-star-half-alt">9.  Bark Thickness,Approximately 1-3 cm, varies by log size </i>
            <i className="fas fa-star-half-alt">10. Defects,May contain knots, splits, or irregularities depending on the tree</i>
            <i className="fas fa-star-half-alt">11. Payment Terms:Cash or Bank instrument </i>
            <i className="fas fa-star-half-alt">12.  Origin:Ghana,Benin,India, Indonesia </i>
            <i className="fas fa-star-half-alt">13. Loading port: Nigeria,Togo </i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-5">
        <FaTimes className="close-icon" size={40} />
          <img src={pic5} alt="img"/>
          <h3>SPECIFICATIONS FOR PROCESSED TEAK WOOD</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Species,Tectona grandis</i>
            <i className="fas fa-star-half-alt">2.  Moisture Content,10-15% (air-dried)  </i>
            <i className="fas fa-star-half-alt">3.  Density,600-800 kg/m³ (depending on moisture content) </i>
            <i className="fas fa-star-half-alt">4.  Color,Ranges from golden brown to dark brown</i>
            <i className="fas fa-star-half-alt">5.  Grain Pattern,Straight, with a fine, even texture </i>
            <i className="fas fa-star-half-alt">6.  Durability,Highly durable (Class 1), resistant to decay and pests </i>
            <i className="fas fa-star-half-alt">6.  Workability,Good; can be machined and finished well</i>
            <i className="fas fa-star-half-alt">7.  Oil Content,High natural oil content, contributing to water resistance(lengths vary)</i>
            <i className="fas fa-star-half-alt">8.  Dimensions,Standard sizes: 1” x 6”, 1” x 8”, 1” x 12”, etc. (thickness x width)</i>
            <i className="fas fa-star-half-alt">9. Finish,Can be left natural or finished with oil, varnish, or lacquer</i>
            <i className="fas fa-star-half-alt">10. Quantity: 5000mt </i>
            <i className="fas fa-star-half-alt">11. Payment Terms: Cash or Bank instruments</i>
            <i className="fas fa-star-half-alt">12. Origin:Ghana,Benin  </i>
            <i className="fas fa-star-half-alt">13. Loading port:Togo,Nigeria  </i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-6">
        <FaTimes className="close-icon" size={40} />
          <img src={pic6} alt="img"/>
          <h3>SPECIFICATIONS FOR SESAME SEED</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt">1. Origin : West Africa</i>
            <i className="fas fa-star-half-alt">2. Crop: 2023/24 season</i>
            <i className="fas fa-star-half-alt">3. Grade: Grade A and B.</i>
            <i className="fas fa-star-half-alt">4.  Grade: Grade A and B.</i>
            <i className="fas fa-star-half-alt">5. FFA (as oleic acid) : 2% max</i>
            <i className="fas fa-star-half-alt">6. Oil content : Up to 50%</i>
            <i className="fas fa-star-half-alt">7. Damaged : 0.5% max.</i>
            <i className="fas fa-star-half-alt">8. Admixture: 1% max.</i>
            <i className="fas fa-star-half-alt">9. Purity: 98%</i>
            <i className="fas fa-star-half-alt">10. Foreign matter: 0.00%. </i>
            <i className="fas fa-star-half-alt">11. Free from extraneous odor. </i>
            <i className="fas fa-star-half-alt">12. Natural smell and taste only. </i>
            <i className="fas fa-star-half-alt">13. Dried under the sun.</i>
            <i className="fas fa-star-half-alt">14. MOQ : 5000mt</i>
            <i className="fas fa-star-half-alt">15. Origin : Nigeria and Togo  </i>
            <i className="fas fa-star-half-alt">16.  Loading Port : Nigeria and Togo port </i>
            <i className="fas fa-star-half-alt">17.  Inco terms : fob only </i>
          </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>

        <div className="preview" data-target="p-7">
        <FaTimes className="close-icon" size={40} />
          <img src={pic7} alt="img"/>
          <h3>SPECIFICATIONS FOR PALM KERNEL SHELLS</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Moisture Content,Max 12%</i>
            <i className="fas fa-star-half-alt">2. Ash Content,3-5%</i>
            <i className="fas fa-star-half-alt">3.  Bulk Density,400-600 kg/m³</i>
            <i className="fas fa-star-half-alt">4. Size,1-3 cm in diameter (irregular shapes)</i>
            <i className="fas fa-star-half-alt">5. Color,Dark brown to black</i>
            <i className="fas fa-star-half-alt">6. Energy Value,Approximately 4,000-4,500 kcal/kg</i>
            <i className="fas fa-star-half-alt">7. Impurities,Max 5% (other materials like dirt or other seeds)</i>
            <i className="fas fa-star-half-alt">8. Impurities,Max 5% (other materials like dirt or other seeds)</i>
            <i className="fas fa-star-half-alt">9. Odor,Mild, characteristic of biomass </i>
            <i className="fas fa-star-half-alt">10. Quantity:5000mt </i>
            <i className="fas fa-star-half-alt">11. Payment Terms: Cash or bank instruments </i>
            <i className="fas fa-star-half-alt">12. Origin:Nigeria,Thailand,Indonesia  </i>
            <i className="fas fa-star-half-alt">13. Loading port: Nigeria, Togo</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>
      
        <div className="preview" data-target="p-8">
        <FaTimes className="close-icon" size={40} />
          <img src={pic8} alt="img"/>
          <h3>SPECIFICATIONS FOR PALM KERNEL NUTS</h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Moisture Content,Max 7-10%</i>
            <i className="fas fa-star-half-alt">2. Oil Content,45-50%</i>
            <i className="fas fa-star-half-alt">3.  Crude Protein,5-7%</i>
            <i className="fas fa-star-half-alt">4. Crude Fiber,10-15%</i>
            <i className="fas fa-star-half-alt">5. Ash Content,2-5%</i>
            <i className="fas fa-star-half-alt">6. Bulk Density,550-650 kg/m³</i>
            <i className="fas fa-star-half-alt">7. ISize,Typically 1-2 cm in diameter</i>
            <i className="fas fa-star-half-alt">8. Color,Dark brown to black</i>
            <i className="fas fa-star-half-alt">9. Impurities,Max 3% (other seeds, dirt, etc.)</i>
            <i className="fas fa-star-half-alt">10. Shelf Life,6 months to 1 year (if stored properly) </i>
            <i className="fas fa-star-half-alt">11. Quantity: 5000mt </i>
            <i className="fas fa-star-half-alt">12. Payment Terms: Cash or bank instrument  </i>
            <i className="fas fa-star-half-alt">13. Origin:Nigeria,Thailand</i>
            <i className="fas fa-star-half-alt">14. Loading port: Togo, Nigeria</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>
       
        <div className="preview" data-target="p-10">
        <FaTimes className="close-icon" size={40} />
          <img src={pic10} alt="img"/>
          <h3>SPECIFICATIONS FOR SORGHUM </h3>
          <div className="stars">
            <i className="fas fa-star-half-alt"><center>Parameter,Typical Value/Range</center></i>
            <i className="fas fa-star-half-alt">1. Moisture Content,Max 12-14%</i>
            <i className="fas fa-star-half-alt">2. Oil Content,45-50%</i>
            <i className="fas fa-star-half-alt">3.  Crude Protein,8-12%</i>
            <i className="fas fa-star-half-alt">4. Crude Fiber,2-4%</i>
            <i className="fas fa-star-half-alt">7. Starch Content,60-70%</i>
            <i className="fas fa-star-half-alt">8. Ash Content,Max 1.5%</i>
            <i className="fas fa-star-half-alt">9. ISize,Typically 1-2 cm in diameteColor,Ranges from white to red, yellow, or brownr</i>
            <i className="fas fa-star-half-alt">10.Test Weight,68-72 kg/hl</i>
            <i className="fas fa-star-half-alt">11. Impurities,Max 1-2% (other seeds, dirt, etc.)</i>
            <i className="fas fa-star-half-alt">12. Shelf Life,6-12 months (if stored properly) </i>
            <i className="fas fa-star-half-alt">13. Quantity: 5000mt </i>
            <i className="fas fa-star-half-alt">14. Payment Terms: Cash or bank instrument  </i>
            <i className="fas fa-star-half-alt">15. Origin:Nigeria,India,Australia </i>
            <i className="fas fa-star-half-alt">16. Loading port: Togo, Nigeria</i>
           </div>
          <div className="button">
            <a href="#" className="cart">add to cart</a>
          </div>
        </div>
        
       
      </div>
      <Footer/>
    </div>
  );
};

export default Catalog;
