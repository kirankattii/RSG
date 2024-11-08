// import React, { useEffect, useState } from 'react';
// import styles from '../styles/NotableStatistics.module.css';

// const NotableStatistics = () => {
//   const hoverLocations = [
//     { x: 915, y: 245 },
//     { x: 1512, y: 311 },
//     { x: 1424, y: 816 },
//     { x: 301, y: 760 },
//     { x: 161, y: 311 },
//   ];

//   const [scale, setScale] = useState(1);

//   useEffect(() => {

//     function updateScale() {
//       const baseWidth = 1920;
//       const currentScale = window.innerWidth / baseWidth;
//       setScale(currentScale);
//     }

//     updateScale();
//     window.addEventListener('resize', updateScale);

//     return () => window.removeEventListener('resize', updateScale);
//   });

//   const positionHoverAreas = (x, y) => {
//     return {
//       top: `${y * scale}px`,
//       left: `${x * scale}px`,
//       transform: `translate(-50%, -50%) scale(${scale})`,
//     };
//   };

//   return (
//     <>
//       <div className={styles.main}>
//         <h1 className={styles.title}>NOTABLE STATISTICS</h1>

//         {hoverLocations.map((location, index) => (
//           <div
//             key={index}
//             className={styles.hoverArea}
//             style={positionHoverAreas(location.x, location.y)}
//             data-aos="zoom-out-up" // AOS animation added here
//           >
//             {index + 1}
//             <div className={styles.popup}>Image {index + 1}</div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default NotableStatistics;


import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/NotableStatistics.module.css';
import '../styles/notable.css';
import '../styles/DynamicImageGrid.css';

const NotableStatisticsComponent = () => {
  const hoverLocations = [
    { x: 915, y: 245 },
    { x: 1512, y: 311 },
    { x: 1424, y: 816 },
    { x: 301, y: 760 },
    { x: 161, y: 311 },
  ];

  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const baseWidth = 1920;
      const currentScale = window.innerWidth / baseWidth;
      setScale(currentScale);
    }

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  });

  const positionHoverAreas = (x, y) => {
    return {
      top: `${y * scale}px`,
      left: `${x * scale}px`,
      transform: `translate(-50%, -50%) scale(${scale})`,
    };
  };

  return (
    <div className={styles.main} style={{ overflow: 'hidden' }}>
      <h1 className={styles.title}>NOTABLE STATISTICS</h1>
      {hoverLocations.map((location, index) => (
        <div
          key={index}
          className={styles.hoverArea}
          style={positionHoverAreas(location.x, location.y)}
          data-aos="zoom-out-up"
        >
          {index + 1}
          <div className={styles.popup}>
            <img
              src={require(`../assets/notable/n-${index + 1}.png`)}
              alt={`Image ${index + 1}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Notable = () => {
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

  return (
    <div className="Notable max-w-4xl mx-auto p-6 bg-white " style={{ overflow: 'hidden' }}>
      <h2 data-aos="fade-right" data-aos-duration="3000" className="text-3xl font-bold mb-6 text-[#8BA989]">
        NOTABLE STATISTICS
      </h2>
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
  );
};

const DynamicImageGrid = () => {
  const imageData = [
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'Dummy image',
    },
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'Industrial facility with silos',
    },
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'Workers spreading rice',
    },
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'People working in a field',
    },
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'Workers in a covered area',
    },
  ];

  useEffect(() => {
    const imageGrid = document.getElementById('imageGrid');
    imageData.forEach((image, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.alt;

      if (index % 5 === 0) {
        imgElement.classList.add('same-first-last-height-1', 'expanded-bottom-to-top-1');
      } else if (index % 5 === 1) {
        imgElement.classList.add('img-medium-1');
      } else if (index % 5 === 2) {
        imgElement.classList.add('small-images-1');
      } else if (index % 5 === 3) {
        imgElement.classList.add('img-extra-small-1');
      } else if (index % 5 === 4) {
        imgElement.classList.add('same-first-last-height-1');
      }

      itemDiv.appendChild(imgElement);
      imageGrid.appendChild(itemDiv);
    });
  }, []);

  return (
    <div className="Notable-dynamic" style={{ overflow: 'hidden' }}>
      <h2 className="heading-dynamic">5 production lines</h2>
      <div className="Notable-text-main">
        <p className="Notable-text-sub">
          RSG Exports operates 5 state-of-the-art production lines, ensuring diverse rice varieties are processed
          simultaneously. Each line is equipped with cutting-edge technology and managed by experienced
          professionals, enabling consistent output and flexibility to meet varying order sizes.
        </p>
      </div>
      <div className="grid-container-main-dyanmic-image">
        <div className="grid-container-dynamic" id="imageGrid"></div>
      </div>
    </div>
  );
};

const NotableStatistics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
    });
  });
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Notable Statistics Section */}
      <section>
        <NotableStatisticsComponent />
      </section>

      {/* Notable Section */}
      <section data-aos="fade-left">
        <Notable />
      </section>

      {/* Dynamic Image Grid Section */}
      {/* <section>
        <DynamicImageGrid />
      </section> */}
    </div>
  );
};

export default NotableStatistics;
