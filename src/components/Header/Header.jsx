import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillFacebook, } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import './Header.css';

const Header = () => {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <header className={`header ${shadow ? "header__shadow" : ""}`}>

            <nav className="header__content">

                <div className="header__logo">
                    <Link to="/" className="logo-link">
                        Click Shop<span>🇲🇦</span>
                    </Link>
                </div>

                <div className="header__links">
                    <a href="https://www.instagram.com/click_shop.ma" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <AiFillInstagram className="header__icon" />
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61579319920365" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <AiFillFacebook className="header__icon" />
                    </a>

                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" title="TikTok">
                        <FaTiktok className="header__icon" />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;