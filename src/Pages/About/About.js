import React from 'react';
import './About.scss';
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg';
import PageTitle from '../../components/PageTitle/PageTitle';
import { TbTargetArrow, TbListDetails } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";

function About() {
    return (
        <div>
            <OtherPagesBg
                title="About Us"
            />

            <div className='aboutContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='aboutWrapper'>
                                <PageTitle
                                    title="We are no. 01 in providing high-end Technical Solutions to Nigeria Oil and Gas Industry"
                                    subTitle="About us"
                                    span="About us"
                                />

                                <div className='text'>
                                    Leadway Engineering (LE) Technologies Limited  is an indigenous Oil and Gas Services
                                    Company created, under the Laws of Federal Republic of Nigeria, to proffer
                                    high-end Technical Solutions to Nigeria Oil and Gas Industry.
                                </div>

                                <div className='text'>
                                    In LE Tech, we are committed to Offering High Quality Solutions, at Very
                                    Moderate Costs, to All Our Clients.
                                </div>

                                <div className='text'>
                                    LE Tech is managed by a set of core professionals who have gained vast
                                    estate of experience working in various sections and in various capacities in
                                    the Oil and Gas Industry before joining the company. And these personnel
                                    were carefully selected for the job.
                                </div>

                                <div className='text'>
                                    We adopts project appraisal through incremental cash flow analysis, to
                                    ensure that non-operating cash outflows are assessed. The three combination
                                    of Cs being our focal point are customers, competition and change; and
                                    these have ultimately created a new world for our business which is a
                                    balanced score card, like the executive dashboard, is an essential tool. The
                                    new golden rule gives enormous power to those individuals and units.
                                </div>

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
                                                    <h4 class="title">World Class Expertise </h4>
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
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <div className="VisionMission">
                                <div className='inner-block'>
                                    <div style={{ width: '100px', height: '100px' }}>
                                        <div className="icon-box">
                                            <TbTargetArrow className='icon' />
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h4>Mission</h4>
                                        <div className='text'>
                                            Using a team of highly Experienced Professionals, Technical Experts, Certified
                                            Primary Equipment, & Approved Standard Operating Procedures to perform
                                            Tasks, so as to exceed clients' expectations, With Compliance to Health, Safety
                                            & Environment.
                                        </div>
                                    </div>
                                </div>

                                <div className='inner-block'>
                                    <div style={{ width: '100px', height: '100px' }}>
                                        <div className="icon-box">
                                            <FaChartBar className='icon' />
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h4>Vision</h4>
                                        <div className='text'>
                                            Our Vision is to be the Leading and most reliable Indigenous Engineering
                                            Solutions Provider, within the Nigeria Oil & Gas Industry.
                                        </div>
                                    </div>
                                </div>

                                <div className='inner-block'>
                                    <div style={{ width: '80px', height: '80px' }}>
                                        <div className="icon-box">
                                            <SlDiamond className='icon' />
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h4>Our Values</h4>
                                        <div className='text'>
                                            This is company’s ethics or ideals that guide us when making decisions,
                                            building relationships and solving problems. These values help us develop and
                                            achieve our professional goals.
                                        </div>
                                        <div className="text">
                                            In LE Tech, the acronym <strong>“TRICCC”</strong> is used to define our core values, and there
                                            are as follows:
                                        </div>
                                        <div className='textValues'><strong>T </strong>-Teamwork</div>
                                        <div className='textValues'><strong>R </strong>-Respect</div>
                                        <div className='textValues'><strong>I </strong>-Integrity</div>
                                        <div className='textValues'><strong>C </strong>-Creativity</div>
                                        <div className='textValues'><strong>C </strong>-Compliance</div>
                                        <div className='textValues'><strong>C </strong>-Customer Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='ClientBenefit'>
                        <PageTitle
                            title="Leadway Engineering Technologies Limited Dedication to our Client"
                            subTitle="Our Client Benefits"
                            span="benefits"
                        />

                        <div className="text">
                            <span><TbListDetails className='icon' /></span>
                            Working with LE Technologies Limited is not only time and cost saving but it is
                            exciting as well, because we combine professionalism, resourcefulness and
                            dedication. We take great pleasure in undertaking all the Oil and Gas related
                            problems of our client.
                        </div>
                        <div className="text">
                            <span><TbListDetails className='icon' /></span>
                            LE Tech will provide support and technical expertise throughout a project’s
                            lifecycle. We ensure that each task is designed, risk assessed, executed and
                            completed with all relevant technical, quality and safety specifications.
                        </div>
                        <div className='text'>
                            <span><TbListDetails className='icon' /></span>
                            LE Offers a comprehensive range of engineering design, construction,
                            and project management services to our clients. We deliver a customerfocused,
                            cost-effective, and first-class service through innovation and
                            continuous improvement in a commercially challenging environment.
                        </div>
                        <div className="text">
                            <span><TbListDetails className='icon' /></span>
                            LE Tech. will provide an experienced and competent inspection team for your
                            project and ensure its safety. Our team of inspectors take safety seriously and
                            guarantee that our inspections are conducted in accordance with all
                            regulations, applicable requirements, procedures and standards.
                        </div>
                        <div className="text">
                            <span><TbListDetails className='icon' /></span>
                            LE provides maximum support to drilling contractors and operators on
                            brownfield and Greenfield platform projects, and major mobile rig
                            reactivations alike. We take charge of a broad range of projects on assets at
                            all stages of their life cycle.
                        </div>
                        <div className="text">
                            <span><TbListDetails className='icon' /></span>
                            We procure or support our client’s procurement functions, providing specialist
                            knowledge in key disciplines.
                        </div>
                        <div className="text">
                            <span><TbListDetails className='icon' /></span>
                            We stock, sell, supply and offer technical advice on all sizes and grades of
                            casings and tubing (OCTG) and Line Pipes.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About