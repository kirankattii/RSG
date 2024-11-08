import React, { useState, useEffect } from 'react';

// Google Translate Initialization
function googleTranslateElementInit() {
    new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
    );
}

// Custom Language Dropdown Component
const CustomLanguageDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Select Language');

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'zh-CN', name: 'Chinese (Simplified)' },
        { code: 'hi', name: 'Hindi' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ru', name: 'Russian' }
    ];

    useEffect(() => {
        const addGoogleTranslateScript = () => {
            const script = document.createElement('script');
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            script.onload = () => {
                if (window.google && window.google.translate) {
                    googleTranslateElementInit(); // Ensure googleTranslateElementInit is called after script load
                }
            };
            document.body.appendChild(script);
        };

        addGoogleTranslateScript();
    }, []);


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language.name);
        setDropdownOpen(false);

        // Ensure google translate select box is loaded before trying to interact with it
        const googleTranslateCombo = document.querySelector('#google_translate_element select');
        if (googleTranslateCombo) {
            googleTranslateCombo.value = language.code;
            googleTranslateCombo.dispatchEvent(new Event('change')); // Trigger language change
        } else {
            console.error("Google Translate element is not available.");
        }
    };


    return (
        <div>
            {/* Hidden Google Translate Element */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>

            {/* Custom Dropdown */}
            <div className="dropdown">
                <button className="action-button" onClick={toggleDropdown}>
                    {selectedLanguage} ▼
                </button>
                {dropdownOpen && (
                    <ul className="dropdown-menu">
                        {languages.map((language, index) => (
                            <li
                                key={index}
                                className="dropdown-item"
                                onClick={() => handleLanguageChange(language)}
                            >
                                {language.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CustomLanguageDropdown;
