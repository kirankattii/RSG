import { useState } from 'react';
import styles from '../styles/dynamicImageGrid.module.css';

const imageData = [
  {
    src: "https://images.unsplash.com/photo-1595265677860-9a3168007dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    alt: "Placeholder Image 1",
    desc: `RSG Exports operates 5 state-of-the-art production lines, ensuring diverse rice varieties are processed
            simultaneously. Each line is equipped with cutting-edge technology and managed by experienced
            professionals, enabling consistent output and flexibility to meet varying order sizes.`,
    title: "5 Production Lines"
  },
  {
    src: "https://images.unsplash.com/photo-1594786118579-95ba90c801ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    alt: "Placeholder Image 2",
    desc: `With a capacity of 33 Metric Tonnes per hour, translating to 660 Metric Tonnes per day, 
            our paddy processing unit ensures rapid and efficient handling of raw paddy.`,
    title: "Paddy Processing Capacity"
  },
  {
    src: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    alt: "Placeholder Image 3",
    desc: `Our milling facilities can process up to 500 Metric Tonnes of rice per day (27.5 Metric Tonnes per hour), 
            ensuring every grain maintains its taste, texture, and nutritional value.`,
    title: "Rice Milling Capacity"
  },
];

const DynamicImageGrid2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? imageData.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:space-x-4 p-4">
      {/* Main Image Display Carousel */}
      <div className="relative w-full md:w-3/4 overflow-hidden">
        <div
          className={`${styles.carousel} flex transition-transform duration-500`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {imageData.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-cover rounded-lg"
            />
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      {/* Image Details and Thumbnail Grid */}
      <div className="w-full md:w-1/4 space-y-4 mt-4 md:mt-0">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600">{imageData[activeIndex].title}</h3>
          <p className="text-gray-700 mt-2">{imageData[activeIndex].desc}</p>
        </div>
        {/* Thumbnail Grid */}
        <div className="flex space-x-2 overflow-x-auto">
          {imageData.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer object-cover h-24 w-24 rounded-md border-2 ${activeIndex === index ? 'border-green-600' : 'border-transparent'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicImageGrid2;
