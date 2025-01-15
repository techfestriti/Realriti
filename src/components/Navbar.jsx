import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleInput = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                    {/* <img src="" alt="Riti" width="80px" /> */}
                    RITI
                </a>
                <div className="menu-icon" onClick={handleInput}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/home" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/events" className="nav-links" onClick={closeMobileMenu}>
                            Events
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/gallery" className="nav-links" onClick={closeMobileMenu}>
                            Gallery
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="/contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
