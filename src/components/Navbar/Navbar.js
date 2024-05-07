import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import { FiAlignRight } from "react-icons/fi";
import logo from '../../Assets/logo.jpeg';
import logo2 from '../../Assets/logo2.png';
import { IoMdClose } from "react-icons/io";

function Navbar() {

    const [navScroll, setNavScroll] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 130) {
            setNavScroll(true);
        } else {
            setNavScroll(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    const [openToggle, setOpenToggle] = useState(false)

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

            <div className="header-middle">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-3 col-md-3 col-12 noShow">
                            <div class="logo-wrapper">
                                <a href="index.html" class="logo"><img src={logo} alt="" /></a>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-9 col-md-12 col-12">
                            <div class="header-middle-right d-flex justify-content-end">
                                <ul class="header-middle-left-call d-flex align-items-center">
                                    <li><MdOutlineCall className='icon' /></li>
                                    <li>
                                        <div class="header-info">
                                            <h5>Emergency Call</h5>
                                            <span>+234 816 086 1494</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="header-middle-right-call d-flex align-items-center">
                                    <li><MdOutlineMailOutline className='icon' /></li>
                                    <li>
                                        <div class="header-info">
                                            <h5>Send Us Email</h5>
                                            <span>info@leadwayengineering.com</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="header-middle-right-call d-flex align-items-center">
                                    <li><BsClock className='icon' /></li>
                                    <li>
                                        <div class="header-info">
                                            <h5>Working time</h5>
                                            <span>Monday- Friday: 8:00 - 17:00</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='container'>
                    <div className='top'>
                        <div className='logo'>
                            <img src={logo} alt="" />
                        </div>

                        <div className='nav-info'>
                          
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
                </div> */}
            </div>

            <div className={navScroll ? 'navbar-navigation scrolled' : 'navbar-navigation'}>
                <div className='NavContainer'>
                    <div className="container">
                        <div className='Navigation'>
                            <div >
                                <NavLink to="/" className="nav-logo">
                                    <img src={logo} alt="" />
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

                            <div className="nav-icon">
                                <span className="" onClick={() => setOpenToggle(true)} > <FiAlignRight />   </span>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

            {openToggle && (
                <div className='toggleContainer'>
                    <div className='toggleWrapper' onClick={(e) => e.stopPropagation()}>
                        <div className='header'>

                            <button onClick={() => setOpenToggle(false)}>
                                <IoMdClose className='icon' />
                            </button>

                            <div className='pageSubTHeading'>Site Navigation</div>
                        </div>

                        <ul className="nav-menu" >
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="active" className="nav-links" onClick={() => setOpenToggle(false)}>Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/about" exact activeClassName="active" className="nav-links" onClick={() => setOpenToggle(false)}>About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/services" exact activeClassName="active" className="nav-links" onClick={() => setOpenToggle(false)}>Services</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/quality-policy" exact activeClassName="active" className="nav-links" onClick={() => setOpenToggle(false)}>Policy</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" exact activeClassName="active" className="nav-links" onClick={() => setOpenToggle(false)}>Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>

            )}


        </div>
    )
}

export default Navbar