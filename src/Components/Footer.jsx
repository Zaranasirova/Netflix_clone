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
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Audio Description</Link></li>
                            <li><Link to={"/"}>Help Centre</Link></li>
                            <li><Link to={"/"}>Gift Cards</Link></li>
                            <li><Link to={"/"}>Media Centre</Link></li>
                            <li><Link to={"/"}>Investor Relations</Link></li>
                            <li><Link to={"/"}>Jobs</Link></li>
                            <li><Link to={"/"}>Terms of Use</Link></li>
                            <li><Link to={"/"}>Privacy</Link></li>
                            <li><Link to={"/"}>Legal Notices</Link></li>
                            <li><Link to={"/"}>Cookie Preferences</Link></li>
                            <li><Link to={"/"}>Corporate Information</Link></li>
                            <li><Link to={"/"}>Contact Us</Link></li>
                        </ul>
                    </nav>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores debitis nobis minus?</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer