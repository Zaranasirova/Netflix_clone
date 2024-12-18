import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.png";
import search from "../assets/icons/search_icon.svg";
import bell from "../assets/icons/bell_icon.svg";
import profile from "../assets/icons/profile_img.png";
import dropdown from "../assets/icons/caret_icon.svg";

const Header = () => {
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add("nav-dark")
            } else {
                navRef.current.classList.remove("nav-dark")
            }
        })
    }, [])
    
    return (
        <header className='header' ref={navRef} >
            <div className="container">
                <div className="header-section row">
                    <div className="left-side ">
                        <div className='netflix-logo'>
                            <Link to={"/"}><img src={logo} alt="netflix-logo" /></Link>
                        </div>
                        <nav className='nav-bar'>
                            <ul className='nav-list'>
                                <li className='nav-list-item'><Link to={"/"}>Home</Link></li>
                                <li className='nav-list-item'><Link to={"/"}>TV Shows</Link></li>
                                <li className='nav-list-item'><Link to={"/"}>Movies</Link></li>
                                <li className='nav-list-item'><Link to={"/"}>New & Popular</Link></li>
                                <li className='nav-list-item'><Link to={"/"}>My List</Link></li>
                                <li className='nav-list-item'><Link to={"/"}>Browse by Languages</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="right-side">
                        <div className="user-area">
                            <div className="search">
                                <img src={search} alt="search-icon-svg" className='icon' />
                            </div>
                            <div className='children'>
                                <Link>Children</Link>
                            </div>
                            <div className="bell">
                                <img src={bell} alt="bell-icon-svg" className='icon' />
                            </div>
                            <div className="navBar-profile">
                                <img src={profile} alt="Profile-image" className='profile' />
                                <img src={dropdown} alt="dropdown-icon" />
                                <div className="dropdown-content">
                                    <p>Sign Out of Netflix</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header