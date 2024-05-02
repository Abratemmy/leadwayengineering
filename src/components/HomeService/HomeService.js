import React from 'react';
import './HomeService.scss'
import PageTitle from '../PageTitle/PageTitle';
import serviceData from '../Data/ServiceData';
import { NavLink } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

function HomeService() {
    return (
        <div className='HomeServiceContainer'>
            <div className='overlay'>
                <div className='container'>
                    <PageTitle
                        title="Best services we are providing for our clients"
                        subTitle="Services"
                        span="Services"
                    />
                    <div className="serviceWrapper">
                        <div className='row'>
                            {serviceData.map((data, index) => {
                                return (
                                    <div className='col-lg-4 col-sm-6 col-md-6'>
                                        <div className='service-block'>
                                            <div className='icon'>{data.icon}</div>
                                            <div className='service-content'>
                                                <h4 className='title'>{data.title}</h4>
                                                <p className='text'>{data.text}</p>
                                            </div>

                                            <div className='service-btn'>
                                                <NavLink to={`/service/${(data.title).replace(/\s+/g, '-')}`} className="serviceNav">Read More <IoIosArrowRoundForward className="icon1" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeService