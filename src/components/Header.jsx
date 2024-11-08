// import React, { useState, useEffect } from 'react';
// import { Button, Select, MenuItem, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
// import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
// import { Link } from "react-router-dom"; // Ensure you are using react-router for navigation
// import '../styles/header.css';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [language, setLanguage] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       setIsScrolled(scrollTop > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     document.body.classList.toggle('scroll-disabled');
//   };

//   return (
//     <>
//       <AppBar position="fixed" className={`header ${isScrolled ? 'scrolled' : ''}`}>
//         <Toolbar className="toolbar">
//           <Typography variant="h6" className="menu">Menu</Typography>
//           {isScrolled && (
//             <Typography variant="h6" className="logo">
//               <Link to="/" className="logo-link">
//               <img src="logo.png" alt="Logo" className="logo-image" />
//               </Link>
//             </Typography>
//           )}
//           <Select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             displayEmpty
//             className="language-select"
//             sx={{
//               border: 'none',
//               '& .MuiOutlinedInput-notchedOutline': {
//                 border: 'none', // Removes the border outline
//               },
//               '&:hover .MuiOutlinedInput-notchedOutline': {
//                 border: 'none', // Removes border on hover
//               },
//             }}
//           >
//             <MenuItem value="" disabled>
//               Language
//             </MenuItem>
//             <MenuItem value="en">English</MenuItem>
//             <MenuItem value="fr">Français</MenuItem>
//             <MenuItem value="de">Deutsch</MenuItem>
//             <MenuItem value="es">Español</MenuItem>
//           </Select>
//         </Toolbar>
//       </AppBar>
//       {isMenuOpen && (
//         <div className="sidebar">
//           <nav className="sidebar-nav">
//             <Link to="#" className="sidebar-item">About</Link>
//             <Link to="#" className="sidebar-item">Features</Link>
//             <Link to="#" className="sidebar-item">Pricing</Link>
//             <Link to="#" className="sidebar-item">Resources</Link>
//             <Link to="#" className="sidebar-item">Contact</Link>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language

    const languages = ['English', 'Spanish', 'French', 'German', 'Hindi']; // Example languages

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setDropdownOpen(false); // Close dropdown after selecting
    };

    return (
        <header className="header">
            <button className="menu-button">☰</button>
            
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
                                {language}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;

