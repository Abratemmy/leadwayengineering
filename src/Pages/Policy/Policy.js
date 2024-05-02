import React from 'react';
import './Policy.scss'
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg';
import PageTitle from '../../components/PageTitle/PageTitle';
import { CgEditBlackPoint } from "react-icons/cg";
import policy1 from "../../Assets/policy1.jpg"
import policy2 from "../../Assets/policy2.jpg"
import policy3 from "../../Assets/policy3.jpg"

function Policy() {
    return (
        <div>
            <OtherPagesBg
                title="HSE & Quality Policy"
            />

            <div className='policyContainer'>
                <div className='container'>
                    <PageTitle
                        title="Health Safety & Environment (HSE) Policy"
                        subTitle="HSE Policy"
                        span="HSE Policy"
                    />

                    <div className='HseContainer'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div className='HseWrapper'>
                                    <div>
                                        <div className='subTitle'>Health Safety & Environment (HSE) Policy</div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='policytitle'>
                                    Leadway Engineering Technologies Limited's policy emphasizes
                                    maintaining a high standard of health, safety, and environmental care.
                                    The following principles apply for all employees:
                                </div>

                                <div className='text'>
                                    <CgEditBlackPoint className='icon' />
                                    <span>
                                        Values code of conduct and corporate governance to the highest
                                        standard and is fully committed to the code of conduct set by the
                                        organisation.
                                    </span>
                                </div>

                                <div className='text'>
                                    <CgEditBlackPoint className='icon' />
                                    <span>
                                        We are committed to providing quality services and constantly improving
                                        the system and work processes in its business operations.
                                    </span>
                                </div>

                                <div className='text'>
                                    <CgEditBlackPoint className='icon' />
                                    <span>
                                        We have strong QHSE policies and this is an integral part of our day-today
                                        work.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='QualityPolicy'>
                    <div className='container'>
                        <PageTitle
                            title="Quality Policy Statement"
                            subTitle="Policy"
                            span="Policy"
                        />

                        <div className='QualityWrapper'>
                            <div className='policytitle'>At Leadway Engineering Technologies Limited</div>
                            <div className='policytitle'>We are committed to:</div>

                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    Developing local content participation in the oil industry
                                    as directed by the Federal government and NAPIMS.
                                </span>
                            </div>

                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    To maximize the participation of indigenous Nigerians in all phases of the Company’s activities.
                                </span>
                            </div>

                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    To use to the extent possible Nigerian expertise for the execution of all our oil industry projects.
                                </span>
                            </div>
                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    To do an exhaustive search for local expertise and resort to expatriates only after it has been established that the needed expertise is unavailable locally In the case where expertise necessary for project execution is unavailable locally, to ensure that Nigerians are attached to foreign experts so as to receive the necessary training and skill transfer.
                                </span>
                            </div>
                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    To ensure to the extent possible that such expatriates are located in Nigeria for
                                    the duration of the project.
                                </span>
                            </div>
                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    To ensure that the applicable technology and skills are transferred to Nigeria
                                    as soon as possible.
                                </span>
                            </div>
                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    We also give students the opportunity to supplement their theoretical
                                    education with practical experience through the provision of internships
                                    (industrial attachments) and research fellowships.
                                </span>
                            </div>
                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    Our multi-disciplinary staff includes professional environmental scientists and
                                    engineers who have specialized skills in petroleum, civil and structural
                                    engineering, hydrology, GIS, and social sciences.
                                </span>
                            </div>
                            <div className='text'>
                                <CgEditBlackPoint className='icon' />
                                <span>
                                    Our goal is to provide you with the highest possible caliber of service. As such,
                                    we staff your projects with the best and most qualified professionals who are
                                    trained to meet and exceed your expectations each and every time.
                                </span>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='Picture'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='image'>
                                    <img src={policy1} alt="" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='image'>
                                    <img src={policy2} alt="" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='image'>
                                    <img src={policy3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Policy