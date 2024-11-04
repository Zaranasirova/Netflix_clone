import React from 'react';
import youtube_icon from "../assets/icons/youtube_icon.png";
import twitter_icon from "../assets/icons/twitter_icon.png";
import instagram_icon from "../assets/icons/instagram_icon.png";
import facebook_icon from "../assets/icons/facebook_icon.png";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-icons">
                        <div className="icon"><img src={youtube_icon} alt="youtube_icon" /></div>
                        <div className="icon"><img src={twitter_icon} alt="twitter_icon" /></div>
                        <div className="icon"><img src={instagram_icon} alt="instagram_icon" /></div>
                        <div className="icon"><img src={facebook_icon} alt="facebook_icon" /></div>
                    </div>
                    <nav className='footer-navbar'>
                        <ul className='footer-navlist'>
                            <li className='footer-navlist-item'><Link to={"/"}>Audio Description</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Help Centre</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Gift Cards</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Media Centre</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Investor Relations</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Jobs</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Terms of Use</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Privacy</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Legal Notices</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Cookie Preferences</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Corporate Information</Link></li>
                            <li className='footer-navlist-item'><Link to={"/"}>Contact Us</Link></li>
                        </ul>
                    </nav>
                    <p className='copywrite-text'>© 1997-2024 Netflix,  Inc.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer