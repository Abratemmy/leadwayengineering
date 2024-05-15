import React from 'react'
import { FaTint } from "react-icons/fa";
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg';
import PageTitle from '../../components/PageTitle/PageTitle';

function Instrumentationcalibfration() {
    return (
        <div>
            <OtherPagesBg
                title="Instrumentation & Calibration"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Instrumentation & Calibration"
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
                                    Instrumentation & Calibration
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='text'>
                                    We  ensure accurate measurement, control, and safety across various operations.
                                </div>
                                <div className='card'>
                                    <div className='title'>
                                        Here's how instrumentation and calibration are utilized:
                                    </div>
                                    <div className='content'>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Measurement and Monitoring: </strong>
                                                Instruments such as pressure gauges, flow meters, level sensors, temperature sensors,
                                                and analyzers are used to measure various
                                                parameters in our oil and gas operations.
                                                These instruments provide real-time data on
                                                factors such as pressure, flow rates,
                                                temperatures, and chemical compositions,
                                                allowing operators to monitor processes and
                                                ensure optimal performance.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Control Systems:  </strong>
                                                Instrumentation is integrated into control systems to regulate and control various processes in LE Tech. oil and gas facilities. Programmable Logic Controllers (PLCs), Distributed Control Systems (DCS), and Supervisory Control and Data Acquisition (SCADA) systems are used to automate and control operations based on input from instruments.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Calibration:  </strong> LE Tech verify the accuracy of instruments to ensure they provide reliable and accurate measurements.
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

export default Instrumentationcalibfration