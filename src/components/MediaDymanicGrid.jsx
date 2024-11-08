import React, { useState } from "react";
import styles from "../styles/MediaDymanicGrid.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Image data
import img1 from "../assets/dynamic/1.png";
import img2 from "../assets/dynamic/2.png";
import img3 from "../assets/dynamic/3.png";
import img4 from "../assets/dynamic/4.png";
import img5 from "../assets/dynamic/5.png";

const imageData = [
  { src: img1, alt: "Production Line", title: "5 Production Lines", desc: "RSG Exports operates 5 state-of-the-art production lines, ensuring diverse rice varieties are processed simultaneously. Each line is equipped with cutting-edge technology and managed by experienced professionals, enabling consistent output and flexibility to meet varying order sizes." },
  { src: img2, alt: "Paddy Processing Capacity", title: "Paddy Processing Capacity", desc: "With a capacity of 33 Metric Tonnes, our paddy processing unit ensures quality processing." },
  { src: img3, alt: "Rice Milling Capacity", title: "Rice Milling Capacity", desc: "Our milling facilities can process large quantities of rice efficiently." },
  { src: img4, alt: "Yearly Milling Capacity", title: "Yearly Milling Capacity", desc: "RSG Exports has an annual milling capacity that meets global demands." },
  { src: img5, alt: "Dryers", title: "22 Dryers", desc: "Our 22 high-quality dryers are integral to the drying process, ensuring quality standards." },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length);
  };

  const { src, alt, title, desc } = imageData[currentIndex];

  return (
    <div className={styles.sliderContainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.slideContentContainer}>
        <img src={src} alt={alt} className={styles.slideImage} />
        <div className={styles.arrowContainer}>
          <button className={styles.arrow} onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button className={styles.arrow} onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
        <div className={styles.slideContent}>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
    </div>
  );
};

export default ImageSlider;
