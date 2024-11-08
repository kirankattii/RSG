// import React, { useState } from 'react';
// import '../styles/DynamicImageGrid.css';

// const imageData = [
//    {
//         src: "https://images.unsplash.com/photo-1595265677860-9a3168007dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//         alt: "Placeholder Image 1",
//         desc: `RSG Exports operates 5 state-of-the-art production lines, ensuring diverse rice varieties are processed
//                 simultaneously. Each line is equipped with cutting-edge technology and managed by experienced
//                 professionals, enabling consistent output and flexibility to meet varying order sizes.`,
//         title: "5 Production Lines"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1594786118579-95ba90c801ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//         alt: "Placeholder Image 2",
//         desc: `With a capacity of 33 Metric Tonnes per hour, translating to 660 Metric Tonnes per day, 
//                 our paddy processing unit ensures rapid and efficient handling of raw paddy.`,
//         title: "Paddy Processing Capacity"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//         alt: "Placeholder Image 3",
//         desc: `Our milling facilities can process up to 500 Metric Tonnes of rice per day (27.5 Metric Tonnes per hour), 
//                 ensuring every grain maintains its taste, texture, and nutritional value.`,
//         title: "Rice Milling Capacity"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//         alt: "Placeholder Image 4",
//         desc: `RSG Exports has an annual milling capacity of 60,000 Metric Tonnes, ensuring a steady supply 
//                 throughout the year for long-term commitments.`,
//         title: "Yearly Milling Capacity"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//         alt: "Placeholder Image 5",
//         desc: `Our dryers use advanced technology, retaining every grain's taste, texture, and nutritional value.`,
//         title: "Dryer Technology"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//         alt: "Placeholder Image 6",
//         desc: `Equipped with state-of-the-art sorting and packaging systems, we ensure uniformity and quality for each product, ready for the market.`,
//         title: "Sorting & Packaging Systems"
//     },
// ];

// function DynamicImageGrid() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextImage = () => {
//         if (currentIndex < imageData.length - 1) {
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     const prevImage = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - 1);
//         }
//     };

//     return (
//         <div className="dynamic-image-grid">
//             <h2 className="dynamic-image-grid-heading" id="dynamicTitle">{imageData[currentIndex].title}</h2>
//             <div className="dynamic-image-grid-text-main">
//                 <p id="dynamicDescription">{imageData[currentIndex].desc}</p>
//             </div>

//             {/* Dynamic Image Grid */}
//             <div className="dynamic-image-grid-container-main">
//                 <div
//                     className="dynamic-image-grid-container"
//                     style={{ transform: `translateX(-${currentIndex * 315}px)` }}
//                 >
//                     {imageData.map((image, index) => (
//                         <div key={index} className={`dynamic-image-grid-item ${index === currentIndex ? 'active' : ''}`}>
//                             <img src={image.src} alt={image.alt} />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="dynamic-image-grid-combine-next-prev">
//                 <button className="dynamic-image-grid-prev-button" onClick={prevImage}>Previous</button>
//                 <button className="dynamic-image-grid-next-button" onClick={nextImage}>Next</button>
//             </div>
//         </div>
//     );
// }

// export default DynamicImageGrid;



import img1 from '../assets/dynamic/1.png';
import img2 from '../assets/dynamic/2.png';
import img3 from '../assets/dynamic/3.png';
import img4 from '../assets/dynamic/4.png';
import img5 from '../assets/dynamic/5.png';
const imageData = [
    {
        src: img1,
        alt: "Placeholder Image 1",
        desc: `RSG Exports operates 5 state-of-the-art production lines, ensuring diverse rice varieties are processed simultaneously. Each line is equipped with cutting-edge technology and managed by experienced professionals, enabling consistent output and flexibility to meet varying order sizes.
`,
        title: "5 Production Lines"
    },
    {
        src: img2,
        alt: "Placeholder Image 2",
        desc: `With a capacity of 33 Metric Tonnes per hour, translating to 660 Metric Tonnes per day, our paddy processing unit ensures rapid and efficient handling of raw paddy. This high-volume capacity enables us to meet bulk orders with ease while maintaining the integrity of the product.
`,
        title: "Paddy Processing Capacity"
    },
    {
        src: img3,
        alt: "Placeholder Image 3",
        desc: `Our milling facilities can process up to 500 Metric Tonnes of rice per day (27.5 Metric Tonnes per hour). This capacity allows us to deliver consistent quality across our product range, ensuring that every grain maintains its taste, texture, and nutritional value.
`,
        title: "Rice Milling Capacity"
    },
    {
        src: img4,
        alt: "Placeholder Image 4",
        desc: `RSG Exports has an annual milling capacity of 60,000 Metric Tonnes. This extensive capacity positions us as a reliable supplier for long-term commitments, capable of meeting seasonal demand and ensuring a steady supply throughout the year.
`,
        title: "Yearly Milling Capacity"
    },
    {
        src: img5,
        alt: "Placeholder Image 5",
        desc: `Our 22 high-quality dryers are integral to our processing efficiency, maintaining optimal moisture levels and ensuring the best quality output. This extensive drying infrastructure allows us to manage large-scale production while enhancing product quality and shelf life.`,
        title: "22 DRYERS"
    },

];
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/DynamicImageGrid.css';
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";



function DynamicImageGrid() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        if (currentIndex < imageData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="dynamic-image-grid">
            <div className='heading-and-navigations'>
                <AnimatePresence>
                    <motion.h2
                        className="dynamic-image-grid-heading"
                        initial={{ scale: 0.5, opacity: 0, }}
                        whileInView={{ scale: 1, opacity: 1, }}
                        transition={{
                            duration: 0.6,
                        }}
                        key={currentIndex}
                    >
                        {imageData[currentIndex].title}
                    </motion.h2>
                </AnimatePresence>

                <div className="dynamic-image-grid-combine-next-prev">
                    <motion.button
                        className="dynamic-image-grid-prev-button"
                        onClick={prevImage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MdChevronLeft />
                    </motion.button>
                    <motion.button
                        className="dynamic-image-grid-next-button"
                        onClick={nextImage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MdChevronRight />
                    </motion.button>
                </div>
            </div>

            <motion.div
                className="dynamic-image-grid-text-main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <AnimatePresence>
                    <motion.p
                        key={currentIndex}
                        initial={{ scale: 0.5, opacity: 0, }}
                        whileInView={{ scale: 1, opacity: 1, }}
                        transition={{ duration: 0.5 }}
                    >
                        {imageData[currentIndex].desc}
                    </motion.p>
                </AnimatePresence>
            </motion.div>

            <div className="dynamic-image-grid-container-main">
                <motion.div
                    className="dynamic-image-grid-container"
                    initial={false}
                    animate={{ x: -currentIndex * 315 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {imageData.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`dynamic-image-grid-item ${index === currentIndex ? 'active' : ''}`}
                            animate={{
                                height: index === currentIndex ? '70vh' : '200px',
                                flex: index === currentIndex ? '0 0 700px' : '0 0 300px'
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                mass: 1
                            }}
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: index === currentIndex ? 1 : 0.95
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>


        </div>
    );
}

export default DynamicImageGrid;
