import React from 'react';
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import PageTitle from '../../components/PageTitle/PageTitle'
import { FaTint } from "react-icons/fa";

function Equipmentleasing() {
    return (
        <div>
            <OtherPagesBg
                title="Equipment Leasing"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Equipment Leasing"
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
                                    Equipment Leasing
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='text'>
                                    LE Tech. carefully evaluate lease agreements and consider all relevant factors before entering into a lease agreement.

                                </div>

                                {/* <div className='card'>
                                    <div className='content'>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Equipment Maintenance: </strong>
                                                Regular inspection, maintenance, and repair of equipment such as pumps, compressors, valves, and pipelines to ensure optimal performance and prevent breakdowns.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Process Optimization: </strong> Continuously monitoring and analyzing processes to identify opportunities for improving efficiency, reducing costs, and minimizing environmental impact.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Health, Safety, and Environment (HSE) Compliance: </strong> Ensuring that operations comply with health, safety, and environmental regulations to protect workers, communities, and ecosystems.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong> Emergency Response: </strong> Developing and implementing emergency response plans to quickly and effectively respond to incidents such as spills, leaks, or equipment failures.
                                            </span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipmentleasing