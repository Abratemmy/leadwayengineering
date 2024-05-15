import React from 'react'
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import PageTitle from '../../components/PageTitle/PageTitle';
import { FaTint } from "react-icons/fa";

function Metering() {
    return (
        <div>
            <OtherPagesBg
                title="Metering"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Metering"
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
                                    Metering
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='card'>
                                    <div className='title'>
                                        LE Tech. Metering Services covers the following:
                                    </div>
                                    <div className='content'>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Production Metering: </strong>
                                                LE Tech. Production Metering measures the volume of oil, gas, and water produced from wells. This data is essential for calculating royalties, production taxes, and reservoir management.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Allocation Metering: </strong>LE Tech. Allocation MEtering measures the volume of hydrocarbons produced from individual wells or fields. This data is used to allocate production costs and revenues among different stakeholders.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Pipeline Metering: </strong> Metering stations are installed along pipelines to measure the flow rate and volume of hydrocarbons being transported.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong> Metering Technologies: </strong> LE Tech. has various metering technologies, including positive displacement meters, turbine meters, ultrasonic meters, and Coriolis meters. Each technology has its advantages and limitations depending on the application.
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

export default Metering