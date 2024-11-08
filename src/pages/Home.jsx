import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import Ambition from '../components/Ambition.jsx';
import Meet from '../components/MeetOurTeam.jsx';
import Products from '../components/Products.jsx';
import Notable from '../components/Notable.jsx';
import TheLuxeGrain from '../components/TheLuxeGrain.jsx';
import NotableStatistics from '../components/NotableStatistics.jsx';
import DynamicImageGrid from '../components/DynamicImageGrid.jsx';
import Carousel from '../components/Carousel.jsx';
import MediaImageSlider from '../components/MediaDymanicGrid.jsx'
import '../styles/home2.css';

const Home = () => {
    return (
        <>
            <section className="full-window section-hero">
                <HeroSection />
            </section>
            <section className="full-window section-ambition">
                <Ambition />
            </section>
            <section className="full-window section-carousel">
                <Carousel />
            </section>
            <section className="full-window section-meet">
                <Meet />
            </section>
            <section className="full-window section-notable-statistics">
                <NotableStatistics />
            </section>
            <section className="full-window section-dynamic-image-grid">
                <div className='dynamic-image-grid-desktop'>
                    <DynamicImageGrid />
                </div>
                <div className='dynamic-image-grid-mobile'>
                    <MediaImageSlider />
                </div>
            </section>
            <section className="full-window section-luxe-grain">
                <TheLuxeGrain />
            </section>
        </>
    );
};

export default Home;
