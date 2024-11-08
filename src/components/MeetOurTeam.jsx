import React, { useState, useEffect } from "react";
import '../styles/meet.css';
import { motion, AnimatePresence } from "framer-motion";


const teamMembers = [
  {
    name: "Naresh Garg",
    position: "CEO & Managing Director",
    image: require('../assets/meet/img.png'), // Replace with actual paths
    description: "A visionary at the helm, Naresh leads with dedication and foresight, shaping the company’s strategic direction and fostering long-term partnerships. His leadership has been instrumental in establishing RSG Exports as a trusted name in the rice industry.",
  },
  {
    name: "Kamal Garg",
    position: "Group Director & Head of Quality Management",
    image: require('../assets/meet/img-1.png'),
    description: "Kamal ensures that every grain of rice meets the highest standards. His expertise in quality control guarantees that our products consistently exceed client expectations, maintaining our reputation for excellence.",
  },
  {
    name: "Pankaj Garg",
    position: "Head of Purchase & International Sales",
    image: require('../assets/meet/img-2.png'),
    description: "With a sharp understanding of international markets, Pankaj oversees global sales and procurement. His skill in navigating complex markets has been key in expanding our global footprint.",
  },
  {
    name: "Vipul Garg",
    position: "Head of Production & Domestic Sales",
    image: require('../assets/meet/img-3.png'),
    description: "Vipul brings a deep knowledge of production and sales to the table, ensuring seamless operations and maintaining strong relationships with our domestic clients. His attention to detail ensures the finest products reach the market.",
  },
  {
    name: "Amit Garg",
    position: "Director & CFO",
    image: require('../assets/meet/img-4.png'),
    description: "As the financial backbone of the company, Amit ensures the fiscal health and growth of RSG Exports. His strategic financial management helps us pursue new opportunities while ensuring long-term stability.",
  },
  {
    name: "Rahul Garg",
    position: "Head of Production & Quality Management",
    image: require('../assets/meet/img-5.png'),
    description: "Rahul combines expertise in production with a keen eye for quality. His hands-on approach ensures that our products consistently meet our rigorous standards, from the field to the final shipment.",
  },
];

// Utility function to break the position text after 30 characters
const breakTextAtLength = (text, length = 30) => {
  if (text.length > length) {
    const firstPart = text.slice(0, length);
    const secondPart = text.slice(length);
    return (
      <>
        {firstPart}
        <br />
        {secondPart}
      </>
    );
  }
  return text;
};

const MeetOurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = teamMembers[currentIndex]; // Get the current team member

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000); // Change every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="meetOurTeam-container">
      <div className="meetOurTeam-meet">MEET</div>
      <div className="meetOurTeam-team">TEAM</div>

      {/* Image container */}
      <div className="meetOurTeam-image-container">
        <img src={content.image} alt={content.name} />
      </div>

      {/* <div className="meetOurTeam-description">
        <p>{content.description}</p>
      </div> */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="meetOurTeam-description"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p>{content.description}</p>
        </motion.div>
      </AnimatePresence>


      {/* Navigation buttons */}
      {/* <div className="meetOurTeam-controls">
        <button className="meetOurTeam-prev" style={{ cursor: 'pointer' }} onClick={handlePrev}>
          Previous
        </button>
        <button className="meetOurTeam-next" style={{ cursor: 'pointer' }} onClick={handleNext}>
          Next
        </button>
      </div> */}

      <div className="meetOurTeam-team-members">
        {/* Render the active member */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            key={currentIndex} className="meetOurTeam-team-member">
            <h3>{content.name} –</h3>
            <p className="meetOurTeam-position active">
              {breakTextAtLength(content.position)}
            </p>
          </motion.div>
          <motion.div
            key={currentIndex}
            className="meetOurTeam-description2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>{content.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Optionally, render the other team members or only the current one */}
      </div>
    </div>
  );
};

export default MeetOurTeam;
