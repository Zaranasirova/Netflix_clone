import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.png";
import search from "../assets/icons/search_icon.svg";
import bell from "../assets/icons/bell_icon.svg";
import profile from "../assets/icons/profile_img.png";
import dropdown from "../assets/icons/caret_icon.svg";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="left-side">
                    <div className='netflix-logo'>
                        <Link><img src={logo} alt="netflix-logo" /></Link>
                    </div>
                    <nav className='nav-bar'>
                        <ul className='nav-list'>
                            <li className='nav-lit-item'><Link>Home</Link></li>
                            <li className='nav-lit-item'><Link>TV Shows</Link></li>
                            <li className='nav-lit-item'><Link>Movies</Link></li>
                            <li className='nav-lit-item'><Link>New & Popular</Link></li>
                            <li className='nav-lit-item'><Link>My List</Link></li>
                            <li className='nav-lit-item'><Link>Browse by Languages</Link></li>

                        </ul>
                    </nav>
                </div>
                <div className="right-side">
                    <div className="user-area">
                        <div className="search">
                            <Link><img src={search} alt="search-icon-svg" /></Link>
                        </div>
                        <div className='children'>
                            <Link>Children</Link>
                        </div>
                        <div className="bell">
                            <Link><img src={bell} alt="bell-icon-svg" /></Link>
                        </div>
                        <div className="navBar-profile">
                            <Link><img src={profile} alt="Profile-image" /></Link>
                            <img src={dropdown} alt="dropdown-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header