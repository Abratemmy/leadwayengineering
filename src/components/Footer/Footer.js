import React from 'react';
import './Footer.scss';
import { CgEditBlackPoint } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { MdLocationOn, MdPhone } from "react-icons/md";
import { BiSolidEnvelope } from "react-icons/bi";

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='overlay'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='cardContent'>
                                <div className='title'>About Company</div>
                                <div className='logo'></div>
                                <div className='text'></div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='cardContent'>
                                <div className='title'>Quick Links</div>
                                <div className='content'>
                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/" className="footerNav">Home</NavLink>
                                    </div>

                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/about" className="footerNav">About Us</NavLink>
                                    </div>

                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/services" className="footerNav">Our Services</NavLink>
                                    </div>

                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/contact" className="footerNav">Contact Us</NavLink>
                                    </div>

                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/quality-policy" className="footerNav">Policy</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='cardContent'>
                                <div className='title'>Services</div>
                                <div className='content'>
                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/" className="footerNav">Instrumentation & control engineering</NavLink>
                                    </div>
                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/" className="footerNav">Rig survey/facility inspection</NavLink>
                                    </div>

                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/" className="footerNav">Lifting Equipment & Inspection Services</NavLink>
                                    </div>

                                    <div className='list'>
                                        <span><CgEditBlackPoint className='icon' /></span>
                                        <NavLink to="/" className="footerNav">Electrical repairs & installations</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='cardContent'>
                                <div className='title'>Contact Info</div>
                                <div className='content'>
                                    <div className='list'>
                                        <span><MdLocationOn className='icon' /></span>
                                        <div className="contactText">Block 4, Road O, London Estate Phase 2, Umiuebeulu Etche
                                            LGA, Rivers State.
                                        </div>
                                    </div>

                                    <div className='list'>
                                        <span><MdPhone className='icon' /></span>
                                        <div className="contactText">
                                            +234 (0) 802 342 9177; +234 (0) 816 086 1494
                                        </div>
                                    </div>

                                    <div className='list'>
                                        <span><BiSolidEnvelope className='icon' /></span>
                                        <div className="contactText">
                                            <a href="mailTo:info@leadwayengineering.com">info@leadwayengineering.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyrightContainer">
                        <div className='copyright'>&copy;copyright, all right reserved {(new Date().getFullYear())} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer