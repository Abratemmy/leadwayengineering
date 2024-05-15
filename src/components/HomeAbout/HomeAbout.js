import React from 'react';
import './HomeAbout.scss'
import PageTitle from '../PageTitle/PageTitle';
import { } from 'react-flaticons';
import aboutimg from '../../Assets/bg-shape1.png'
import PageButton from '../PageButton/PageButton';
import aboutImage from '../../Assets/about.jpeg'


function HomeAbout() {
    return (
        <div className='HomeAboutContainer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 col-md-12 col-12'>
                        <PageTitle
                            title="We are no. 01 in providing high-end Technical Solutions to Nigeria Oil and Gas Industry"
                            subTitle="About us"
                            span="About us"
                        >
                            <div className='aboutText'>
                                Leadway Engineering Technologies Limited is an indigenous Oil & Gas Service
                                Company created, under the Laws of Federal Republic of Nigeria, to proffer
                                high-end Technical Solutions to Nigeria Oil and Gas Industry.
                            </div>
                        </PageTitle>

                        <div className='row'>
                            <div class="row xs-mt-20">
                                <div class="col-lg-4 col-md-4">
                                    <div class="about-info mt-50 xs-mt-20">
                                        <div class="icon">
                                            <i class="flaticon-home"></i>
                                        </div>
                                        <div class="content">
                                            <h4 class="title">Quality solutions</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="about-info mt-50 xs-mt-20">
                                        <div class="icon">
                                            <i class="fui-gas"></i>
                                        </div>
                                        <div class="content">
                                            <h4 class="title">World Class Expertise</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="about-info active mt-50 xs-mt-20">
                                        <div class="icon">
                                            <i class="flaticon-carpenter"></i>
                                        </div>
                                        <div class="content">
                                            <h4 class="title">Self Projects Delivery </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='' style={{ marginTop: '40px' }}>
                            <PageButton
                                goToNav='About'
                                name="Read More"
                            />
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 col-12'>
                        <div className="Image">
                            <img src={aboutImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='aboutImg'>
                <img src={aboutimg} alt="" />
            </div>
        </div>
    )
}

export default HomeAbout