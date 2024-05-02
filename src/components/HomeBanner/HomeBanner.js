import React from 'react';
import './HomeBanner.scss'
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import banner1 from '../../Assets/banner-01.jpg';
import banner2 from '../../Assets/banner-02.jpg';
import banner3 from '../../Assets/banner-03.png';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

function HomeBanner() {

    return (
        <div className='CarouselWrapper'>
            <div className='pageContainer' >
                <OwlCarousel items={1}
                    className="owl-carousel owl-theme"
                    loop
                    nav
                    margin={8}
                    dots={false}
                    mouseDrag={false}
                    autoplay
                    autoplayTimeout={8000}
                    animateOut={'animate__animated animate__fadeInUpBig'}
                >
                    <div className='sliderWrapper'>
                        <img alt="img" className="img" src={banner1} />
                        <div className="slider-overlay"></div>
                        <div className="cover">
                            <div className="container">
                                <div className="header-content">
                                    <h3>Oil Service Company
                                        <span className='border-shape'></span>
                                    </h3>
                                    <h1>Best Energy Solution Provider</h1>
                                    <div className='buttongroup'>
                                        <div><NavLink to="/about" className="pagebutton">
                                            <span className='btn-arrow before'>
                                                <IoIosArrowRoundForward className="icon" />
                                            </span>
                                            Read more
                                            <span className='btn-arrow after'>
                                                <IoIosArrowRoundBack className="icon" />
                                            </span>
                                        </NavLink>
                                        </div>
                                        <div><NavLink to="/service" className="pagebutton pagebuttonDark">
                                            <span className='btn-arrow before'>
                                                <IoIosArrowRoundForward className="icon" />
                                            </span>
                                            Services
                                            <span className='btn-arrow after'>
                                                <IoIosArrowRoundBack className="icon" />
                                            </span>
                                        </NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sliderWrapper'>
                        <img alt="img" className="img" src={banner2} />
                        <div className="slider-overlay"></div>
                        <div className="cover">
                            <div className="container">
                                <div className="header-content">
                                    <h3>Oil Service Company
                                        <span className='border-shape'></span>
                                    </h3>
                                    <h1>Providing innovative solutions</h1>
                                    <div className='buttongroup'>
                                        <div><NavLink to="/about" className="pagebutton">
                                            <span className='btn-arrow before'>
                                                <IoIosArrowRoundForward className="icon" />
                                            </span>
                                            Read more
                                            <span className='btn-arrow after'>
                                                <IoIosArrowRoundBack className="icon" />
                                            </span>
                                        </NavLink>
                                        </div>
                                        <div><NavLink to="/service" className="pagebutton pagebuttonDark">
                                            <span className='btn-arrow before'>
                                                <IoIosArrowRoundForward className="icon" />
                                            </span>
                                            Services
                                            <span className='btn-arrow after'>
                                                <IoIosArrowRoundBack className="icon" />
                                            </span>
                                        </NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sliderWrapper'>
                        <img alt="img" className="img" src={banner3} />
                        <div className="slider-overlay"></div>
                        <div className="cover">
                            <div className="container">
                                <div className="header-content">
                                    <h3>Oil Service Company
                                        <span className='border-shape'></span>
                                    </h3>
                                    <h1>Energy for a sustainable tomorrow</h1>
                                    <div className='buttongroup'>
                                        <div><NavLink to="/about" className="pagebutton">
                                            <span className='btn-arrow before'>
                                                <IoIosArrowRoundForward className="icon" />
                                            </span>
                                            Read more
                                            <span className='btn-arrow after'>
                                                <IoIosArrowRoundBack className="icon" />
                                            </span>
                                        </NavLink>
                                        </div>
                                        <div><NavLink to="/service" className="pagebutton pagebuttonDark">
                                            <span className='btn-arrow before'>
                                                <IoIosArrowRoundForward className="icon" />
                                            </span>
                                            Services
                                            <span className='btn-arrow after'>
                                                <IoIosArrowRoundBack className="icon" />
                                            </span>
                                        </NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

            <div className='benefits'>
                <div className='container'>
                    <div className='row align-item-center justify-content-center'>
                        <div className='col-12'>
                            <div className='benefits-content'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div class="benefits-content-detl">
                                            <div class="heading">
                                                <h3>Our Clients <span> Benefits</span></h3>
                                            </div>
                                            <div class="content">
                                                <h3>24/7</h3>
                                                <h4>Direct Support</h4>
                                            </div>
                                            <div class="content">
                                                <h3>30 Days</h3>
                                                <h4>Gurantee</h4>
                                            </div>
                                            <div class="content">
                                                <h3>Life time</h3>
                                                <h4>Free Transportation</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner