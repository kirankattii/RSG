import React, { useEffect, useState } from 'react';
import '../styles/products.css'; // Assuming you link your external CSS file
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  // Dynamic data: each object contains the text and the image source
  const productsData = [
    {
      text: `
      Rice is more than just a staple; it's a symbol of nourishment and tradition. 
      From fragrant Basmati to versatile Non-Basmati varieties, 
      rice forms the foundation of countless dishes across cultures. At RSG Exports Pvt. Ltd.,
       we bring you the finest selection of rice, cultivated with care and precision to deliver unmatched taste and quality.
      `,
      image: require('../assets/products/p-1.png')
    },
    {
      text: `
      Each team member plays a pivotal role in shaping the success of RSG Exports Pvt. Ltd.
      Their combined talents, hard work, and shared values have helped us grow from a local operation to a global leader in the rice export industry. 
      Together, we continue to push boundaries, 
      driving innovation and delivering the finest products to our valued clients around the world.
      `,
      image: require('../assets/products/p-2.png')
    },
    {
      text: `
      Rice is more than just a staple; it's a symbol of nourishment and tradition. 
      From fragrant Basmati to versatile Non-Basmati varieties, 
      rice forms the foundation of countless dishes across cultures. At RSG Exports Pvt. Ltd.,
       we bring you the finest selection of rice, cultivated with care and precision to deliver unmatched taste and quality.
      `,
      image: require('../assets/products/p-3.png')
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    console.log("ScrollTrigger is working...");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".products-container",
        start: "top top",
        end: "+=3000",
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (productsData.length - 1));
          setCurrentSection(index);
        }
      }
    });

    // Animate each image from the right one by one
    productsData.forEach((_, index) => {
      timeline.fromTo(
        `.products-image-content-${index}`,
        { x: '100%', opacity: 0 }, // Start off-screen from the right
        { x: '0%', opacity: 1, duration: 1, ease: "power2.out" }, // Slide in
        index * 1 // Delay each animation by 1 second
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [productsData]);

  return (
    <div className="products-container">
      <div className="products-content-wrapper">
        {/* Display the text dynamically based on the current section */}
        <div className="products-text-content">
          <p>{productsData[currentSection]?.text}</p>
        </div>

        {/* Loop through productsData to render the images */}
        {productsData.map((product, index) => (
          <div key={index} className={`products-image-content products-image-content-${index}`}>
            <img src={product.image} alt={`Product ${index + 1}`} className="products-image-responsive" />
          </div>
        ))}
      </div>

      <div className="products-footer-wrapper">
        <h2 className="products-title">Products</h2>
        <button className="products-view-all-btn">View All</button>
      </div>
    </div>
  );
};

export default Products;
