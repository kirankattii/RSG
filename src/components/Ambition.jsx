import React, { useState } from 'react';
import '../styles/ambition.css';

const Ambition = () => {
    const [isImageClicked, setImageClicked] = useState(false);

    const handleImageClick = () => {
        setImageClicked(!isImageClicked);
    };

    return (
        <div className="ambition-container">
            <div className="ambition-content">
                <div className="ambition-left-section">
                    <h1 className='ambition-left-title'>SOWING<br />THE SEEDS</h1>
                </div>
                <div className="ambition-right-section">
                    <div className="ambition-logo">
                        <div className='ambition-logo-container'>
                            <div
                                className={`ambition-logo-image ${isImageClicked ? 'clicked' : ''}`}
                                onClick={handleImageClick}
                            ></div>
                            <span className="ambition-f">F</span>
                        </div>
                        <div className="ambition-logo-text"> AMBITION</div>
                    </div>
                    <p className="ambition-description">
                        Starting as RSG Foods Pvt. Ltd., we embarked on a journey of growth guided by
                        visionary leadership. Built on customer trust and an unwavering commitment to
                        quality, the RSG Group expanded rapidly, adding a second production unit and
                        launching exports to meet the growing global demand for premium rice.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Ambition;
