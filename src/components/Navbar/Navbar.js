import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineCall, MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom';
import { FiAlignRight } from "react-icons/fi";
import logo from '../../Assets/logo.jpeg';
// import logo2 from '../../Assets/logo2.png';
import { IoMdClose } from "react-icons/io";
import smallLogo from '../../Assets/smallLogo.png'

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

    const [openToggle, setOpenToggle] = useState(false)

    const [openDropdown, setOpenDropdown] = useState(false)

    const handleDropdown = () => {
        setOpenToggle(false);
        setOpenDropdown(false)
    }

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
                                            <h6>Emergency Call</h6>
                                            <span>+234 802 342 9177 <br />
                                                +234 816 086 1494</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="header-middle-right-call d-flex align-items-center">
                                    <li><MdOutlineMailOutline className='icon' /></li>
                                    <li>
                                        <div class="header-info">
                                            <h6>Send Us Email</h6>
                                            <span>info@leadwayengineering.com</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="header-middle-right-call d-flex align-items-center">
                                    <li><BsClock className='icon' /></li>
                                    <li>
                                        <div class="header-info">
                                            <h6>Working time</h6>
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
                            <div>
                                <NavLink to="/" className="smallNav-logo">
                                    <img src={smallLogo} alt="" />
                                </NavLink>
                            </div>

                            <ul className="nav-menu">

                                <li className="nav-item">
                                    <NavLink to="/" exact activeClassName="active" className="nav-links">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/about" exact activeClassName="active" className="nav-links">About</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/services" exact activeClassName="active" className="nav-links">Services</NavLink>
                                </li>

                                <li className="nav-item">
                                    <Link to="#" activeClassName="active" className="nav-links" aria-current="page"
                                    >Policies
                                        <span><IoIosArrowDown className='icon' /></span>
                                    </Link>

                                    <div className="navDropdown" aria-labelledby="menu-200">
                                        <div className='left'>
                                            <NavLink to="/quality_policy_statement" className='dropdown-Nav'>Quality Policy Statement</NavLink>
                                            <NavLink to="/drug_alcohol_policy" className='dropdown-Nav'>DRUG AND ALCOHOL POLICY</NavLink>
                                            <NavLink to="/environmental_policy" className='dropdown-Nav'>ENVIRONMENTAL POLICY</NavLink>
                                            <NavLink to="/waste_management_policy" className='dropdown-Nav'>WASTE MANAGEMENT POLICY</NavLink>

                                        </div>
                                        <div className='right'>
                                            <NavLink to="/occupational_policy" className='dropdown-Nav'>OCCUPATIONAL HEALTH & SAFETY POLICY</NavLink>
                                            <NavLink to="/recruitment_policy" className='dropdown-Nav'>RECRUITMENT POLICY</NavLink>
                                            <NavLink to="/local_content_policy" className='dropdown-Nav'>LOCAL CONTENT DEVELOPMENT POLICY</NavLink>
                                            <NavLink to="/anti_bribery_policy" className='dropdown-Nav'>ANTI BRIBERY AND CORRUPTION POLICY</NavLink>
                                        </div>
                                    </div>

                                </li>

                                <li className="nav-item">
                                    <NavLink to="/contact" exact activeClassName="active" className="nav-links">Contact</NavLink>
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
                                <Link to="#" exact activeClassName="active" className="nav-links" onClick={() => setOpenDropdown(!openDropdown)}>Policies
                                    <span><IoIosArrowDown className='icon' /></span>
                                </Link>
                                {openDropdown && (
                                    <div className="navDropdown" aria-labelledby="menu-200">
                                        <div className='left'>
                                            <NavLink to="/quality_policy_statement" activeClassName="active" className='dropdown-Nav' onClick={handleDropdown}>Quality Policy Statement</NavLink>
                                            <NavLink to="/drug_alcohol_policy" activeClassName="active" className='dropdown-Nav' onClick={handleDropdown}>DRUG AND ALCOHOL POLICY</NavLink>
                                            <NavLink to="/environmental_policy" activeClassName="active" className='dropdown-Nav' onClick={handleDropdown}>ENVIRONMENTAL POLICY</NavLink>
                                            <NavLink to="/waste_management_policy" activeClassName="active" className='dropdown-Nav' onClick={handleDropdown}>WASTE MANAGEMENT POLICY</NavLink>

                                        </div>
                                        <div className='right'>
                                            <NavLink to="/occupational_policy" activeClassName="active" className='dropdown-Nav' onClick={handleDropdown}>OCCUPATIONAL HEALTH & SAFETY POLICY</NavLink>
                                            <NavLink to="/recruitment_policy" activeClassName="active" className='dropdown-Nav' onClick={handleDropdown}>RECRUITMENT POLICY</NavLink>
                                            <NavLink to="/local_content_policy" activeClassName="active" className='dropdown-Nav' onClick={handleDropdown}>LOCAL CONTENT DEVELOPMENT POLICY</NavLink>
                                            <NavLink to="/anti_bribery_policy" activeClassName="active" className='dropdown-Nav' onClick={handleDropdown}>ANTI BRIBERY AND CORRUPTION POLICY</NavLink>
                                        </div>
                                    </div>
                                )}
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