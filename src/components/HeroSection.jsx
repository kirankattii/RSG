import React, { useEffect } from 'react';
import '../styles/hero.css';

const HeroSection = () => {

    useEffect(() => {
        const logo = document.getElementById('logo');
        const header = document.querySelector('.header');
        const container = document.querySelector('.container');

        function updateLogoPosition() {
            const containerRect = container.getBoundingClientRect();
            const headerHeight = header.offsetHeight;

            if (containerRect.bottom <= headerHeight) {
                logo.classList.add('fixed');
            } else {
                logo.classList.remove('fixed');
            }
        }

        window.addEventListener('scroll', updateLogoPosition);
        window.addEventListener('resize', updateLogoPosition);
        updateLogoPosition();

        return () => {
            window.removeEventListener('scroll', updateLogoPosition);
            window.removeEventListener('resize', updateLogoPosition);
        };
    }, []);

    return (
        <div className="container">
            <div className="logo" id="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            </div>
            <div className="marquee-container">
                {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((top, i) => (
                    <div
                        className={`marquee-line ${i % 2 === 0 ? 'marquee-line-odd' : 'marquee-line-even'} ${i % 2 === 0 ? 'marquee-rtl' : 'marquee-ltr'}`}
                        style={{ top: `${top}%` }}
                        key={i}
                    >
                        <div className="marquee-content">
                            {Array(10).fill('EXPORTS RSG ').map((text, index) => <span key={index}>{text}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
