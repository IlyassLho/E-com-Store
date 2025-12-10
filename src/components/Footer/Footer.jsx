import './Footer.css';
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PORTFOLIO_LINK = "https://ilyaslhouari.netlify.app/";

const Footer = () => {
    return (
        <footer className="footer" dir="rtl">
            <div className="footer__content">

                <div className="footer__links_column">
                    <h4>روابط سريعة</h4>
                    <ul>
                        <li><Link to="/shipping-policy">الشحن والتوصيل</Link></li>
                        <li><Link to="/return-policy">سياسة الإرجاع</Link></li>
                        <li><Link to="/about-us">من نحن</Link></li>
                    </ul>
                </div>

                <div className="footer__copy">
                    <p>
                        Created by
                        <a href={PORTFOLIO_LINK} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>
                            Ilyas Lhouari
                        </a>
                    </p>
                    <p>Click Shop Maroc. جميع الحقوق محفوظة © 2025</p>
                </div>

                <div className="footer__icons">
                    <a href="https://www.instagram.com/click_shop.ma" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <AiFillInstagram className="footer__icon" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61579319920365" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <AiFillFacebook className="footer__icon" />
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" title="TikTok">
                        <FaTiktok className="footer__icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;