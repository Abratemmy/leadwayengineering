import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import { FiAlignRight, FiXCircle } from "react-icons/fi";

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 130) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    return (
        <div className='Navbar-container'>
            <div className='container'>
                <div className='header-top'>
                    <div className='nav-top'>
                        <div className='nav-top1'></div>
                        <div className='nav-top2'></div>
                    </div>
                    <div className='welcome'>Welcome to Leadway Engineering </div>

                </div>
            </div>
            <div className='navbar-content'>
                <div className='container'>
                    <div className='top'>
                        <div className='logo'>LEADWAY</div>

                        <div className='nav-info'>
                            <div className='nav-info-content noShow'>
                                <div className='left'><MdOutlineCall className='icon' /></div>
                                <div className='right'>
                                    <div className='title'>Office Line</div>
                                    <span>+234 816 086 1494</span>
                                </div>
                            </div>
                            <div className='nav-info-content'>
                                <div className='left'><MdOutlineMailOutline className='icon' /></div>
                                <div className='right'>
                                    <div className='title'>Office Email</div>
                                    <span><a href="mailto: abc.com">info@leadwayengineering.com </a> </span>
                                </div>
                            </div>
                            <div className='nav-info-content noShow'>
                                <div className='left'><BsClock className='icon' /></div>
                                <div className='right'>
                                    <div className='title'>Working Time</div>
                                    <span>Monday- Friday: 8:00 - 17:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='navbar-navigation'>
                    <div className='navigationBg'>
                        <div className="container" style={{ height: '100%' }}>
                            <div className="Navigation">
                                <div >
                                    <NavLink to="/" className="nav-logo">
                                        LOGO
                                    </NavLink>
                                </div>

                                <ul className={click ? "nav-menu active" : "nav-menu"}>
                                    <li className="nav-item">
                                        <NavLink to="/" exact activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/about" exact activeClassName="active" className="nav-links" onClick={handleClick}>About</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/services" exact activeClassName="active" className="nav-links" onClick={handleClick}>Services</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/quality-policy" exact activeClassName="active" className="nav-links" onClick={handleClick}>Policy</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/contact" exact activeClassName="active" className="nav-links" onClick={handleClick}>Contact</NavLink>
                                    </li>

                                </ul>

                                <div className="nav-icon" onClick={handleClick}>
                                    {click === true ? <div>
                                        <span className="" onClick={handleClick} > <FiXCircle className="nav-cancel" />   </span>
                                    </div> : <div>
                                        <span className="" onClick={handleClick} > <FiAlignRight />   </span>
                                    </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar