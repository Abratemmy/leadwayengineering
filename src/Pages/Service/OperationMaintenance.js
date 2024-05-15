import React from 'react'
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import PageTitle from '../../components/PageTitle/PageTitle'
import { FaTint } from "react-icons/fa";
import serviceImg from '../../Assets/service1.jpg'

function OperationMaintenance() {
    return (
        <div>
            <OtherPagesBg
                title="Operation & Maintenance Support"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Operation & Maintenance Support"
                        subTitle="Service"
                        span="Service"
                    />

                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-6'>
                            <div className='image' style={{ marginBottom: '40px' }}>
                                <img src={serviceImg} alt="" />
                                <div className='imgText'>
                                    O & M
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='text'>
                                    LE Tech. support involves various activities aimed at maintaining equipment, optimizing processes, and ensuring compliance with regulatory requirements.
                                    Our key aspects of operation & maintenance support include:

                                </div>

                                <div className='card'>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OperationMaintenance