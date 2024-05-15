import React from 'react';
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import PageTitle from '../../components/PageTitle/PageTitle'
import { FaTint } from "react-icons/fa";

function Manpower() {
    return (
        <div>
            <OtherPagesBg
                title="Manpower Outsourcing"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Manpower Outsourcing"
                        subTitle="Service"
                        span="Service"
                    />

                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-6'>
                            <div className='image' style={{ marginBottom: '40px' }}>
                                <div className='noImage'>
                                    <div className='overlay'></div>
                                </div>
                                <div className='imgText'>
                                    Manpower Outsourcing
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='text'>
                                    LE Tech. hire external companies to provide labor for various tasks within the sector.
                                    This can include skilled and unskilled workers for exploration, drilling, production, maintenance, and other operations.
                                    We consider the following factors when outsourcing for manpower

                                </div>

                                <div className='card'>
                                    <div className='content'>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Specialized Skills: </strong>
                                                We require workers with specialized skills, such as drilling engineers, geologists, and technicians. When outsourcing, we ensure the provider has access to these skills.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Safety Standards: </strong>
                                                We ensure that the outsourced workers are trained in relevant safety protocols and comply with industry standards.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Regulatory Compliance: </strong>
                                                We make sure the outsourcing company complies with all relevant regulations and has the necessary certifications.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong> Quality Assurance:  </strong>
                                                We ensure that the outsourcing company has a track record of providing high-quality services and has a robust quality assurance process in place.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong> Cultural Fit:  </strong>
                                                We consider the cultural fit of the outsourcing company with LE Tech., as this can impact communication and collaboration.
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

export default Manpower