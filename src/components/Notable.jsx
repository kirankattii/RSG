import React from "react";
import "../styles/notable.css";

import DynamicImageGrid from '../components/DynamicImageGrid.jsx';

const imageData = [
  {
    src: require("../assets/notable/n-1.png") || "https://via.placeholder.com/300x200.png?text=Placeholder",
    alt: "Dummy image",
  },
  {
    src: require("../assets/notable/n-2.png") || "https://via.placeholder.com/300x200.png?text=Placeholder",
    alt: "Industrial facility with silos",
  },
  {
    src: require("../assets/notable/n-3.png") || "https://via.placeholder.com/300x200.png?text=Placeholder",
    alt: "Workers spreading rice",
  },
  {
    src: require("../assets/notable/n-4.png") || "https://via.placeholder.com/300x200.png?text=Placeholder",
    alt: "People working in a field",
  },
  {
    src: require("../assets/notable/n-5.png") || "https://via.placeholder.com/300x200.png?text=Placeholder",
    alt: "Workers in a covered area",
  },
];

const Notable = () => {
  return (
    <>
      <div className="Notable max-w-4xl mx-auto p-6 bg-white">
        <h2 data-aos="fade-right" data-aos-duration="3000" className="text-3xl font-bold mb-6 text-[#8BA989]">NOTABLE STATISTICS</h2>
        <ul data-aos="fade-right" data-aos-duration="4000" className="list-decimal pl-5 mb-8 text-[#8BA989] space-y-2">
          <li>5 production lines</li>
          <li>35MT paddy/hour or 660MT/day paddy processing capacity</li>
          <li>Rice milling capacity 500MT/day or 27.5 MT per hour</li>
          <li>Yearly milling 60000MT</li>
          <li>22 dryers</li>
        </ul>

        <div className="grid-container" data-aos="fade-left" data-aos-duration="5000">
          {imageData.map((image, index) => (
            <div className="item" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className={
                  index % 5 === 0
                    ? "same-first-last-height"
                    : index % 5 === 1
                      ? "img-medium"
                      : index % 5 === 2
                        ? "small-images"
                        : index % 5 === 3
                          ? "img-extra-small"
                          : "same-first-last-height"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notable;
