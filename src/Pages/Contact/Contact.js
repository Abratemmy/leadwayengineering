import React from 'react';
import './Contact.scss';
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageButton from '../../components/PageButton/PageButton';
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

function Contact() {
    return (
        <div>
            <OtherPagesBg
                title="Contact Us"
            />
            <div className='contactContainer'>
                <div className='container'>
                    <PageTitle
                        title="Leave us a message, We will be in touch."
                        subTitle="Contact us"
                        span="Contact"
                    />
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>

                            <div className='text'>
                                <div className='form'>
                                    <form>
                                        <div className='inputDiv'>
                                            <label>Your Name (required)</label>
                                            <input type="text" name="name" className='input' />
                                        </div>
                                        <div className='inputDiv'>
                                            <label>Your Email (required)</label>
                                            <input type="email" name="name" className='input' />
                                        </div>
                                        <div className='inputDiv'>
                                            <label>Phone (required)</label>
                                            <input type="phone" name="name" className='input' />
                                        </div>
                                        <div className='inputDiv'>
                                            <label>Message (required)</label>
                                            <textarea rows="5" name="message" className='message'></textarea>
                                        </div>


                                        <button type="submit" className='pagebutton'>
                                            <PageButton
                                                name="send Message"
                                            />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='getInTouch'>
                                <div className='title'>Get in Touch with us</div>
                                <div className='subtitle'>Get in touch via any of the following means:</div>
                                <div className='inner-block'>
                                    <div >
                                        <div className="icon-box">
                                            <FaPhoneAlt className='icon' />
                                        </div>
                                    </div>
                                    <div className='content'>
                                        +234 802 342 9177<br />
                                        +234 816 086 1494
                                    </div>
                                </div>

                                <div className='inner-block'>
                                    <div >
                                        <div className="icon-box">
                                            <FaRegEnvelope className='icon' />
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <a href="email:info@leadwayengineering.com">info@leadwayengineering.com</a>
                                    </div>
                                </div>

                                <div className='inner-block'>
                                    <div >
                                        <div className="icon-box">
                                            <MdOutlineLocationOn className='icon' />
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='text'>Address:
                                            <span>
                                                Block 4, Road O, London Estate Phase 2, Umuebulu Etche
                                                LGA, Rivers State.
                                            </span>
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

export default Contact