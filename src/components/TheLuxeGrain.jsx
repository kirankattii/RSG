import React from 'react';
import '../styles/TheLuxeGrain.css'; // Import the CSS file
import img from '../assets/TheLuxeGrain/video.png'; // Import your images
import { motion } from 'framer-motion'

const TheLuxeGrain = () => {
    return (
        <div className="theLuxeGrain">
            <div className="containers">
                <div className="main-content">
                    <motion.div
                    >
                        <motion.h1 initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                duration: 1,
                            }}>THE LUXE GRAIN</motion.h1>
                        <motion.p initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                duration: 1,
                            }} className="tagline">
                            Why RSG Exports is the Best Choice for Fine Dining: Explore what makes RSG rice special for high-end cuisine.
                        </motion.p>
                    </motion.div>
                    <div className="image-container">
                        <motion.div
                            initial={{ rotate: -100, }}
                            whileInView={{ rotate: 0, }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 60 },
                                ease: "easeIn",
                                duration: 0.5,
                            }} className="circular-image">
                            <video className="video-the-luxe" src={'https://res.cloudinary.com/dtivafy25/video/upload/v1729164889/16665687-uhd_3840_2160_24fps_vvt8pb.mp4'} autoPlay loop muted playsInline></video>
                        </motion.div>
                        <button className="know-more-btn">KNOW MORE</button>
                    </div>
                    <div className="description">
                        <motion.p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                duration: 1,
                            }}>
                            The Luxe Grain is a blog designed to highlight RSG Exports' premium rice as a symbol of luxury and quality.
                            It showcases the rich heritage, superior quality, and unique culinary applications of RSG's Basmati and
                            Non-Basmati rice varieties. Through engaging stories, luxury recipes, and insights into global success, the
                            blog positions RSG Exports as the go-to brand for those seeking a refined culinary experience. With
                            categories like Quality & Heritage, Culinary Experience, and Health & Wellness, it brings together customer
                            testimonials, chef interviews, and benefits of premium rice to create an elegant and sophisticated narrative
                            around RSG's offerings.
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className="categories">
                    <ul>
                        <li><span>Quality & Heritage:</span> Stories of RSG's rice journey and heritage.</li>
                        <li><span>Culinary Experience:</span> Luxury recipes, pairing ideas.</li>
                        <li><span>Health & Wellness:</span> Benefits of using high-quality rice.</li>
                        <li><span>Global Footprint:</span> RSG's international success stories.</li>
                        <li><span>Spotlight:</span> Interviews and customer testimonials.</li>
                    </ul>
                </motion.div>
                <div className="image-grid">
                    {[...Array(5)].map((_, i) => (
                        <motion.div initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                duration: 1,
                            }} className="image-grid-item" key={i}>
                            <img src={require(`../assets/TheLuxeGrain/img-${i + 1}.png`) || 'https://via.placeholder.com/150'} alt={`Rice production image ${i + 1}`} className="image-grid-item-image" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TheLuxeGrain;
