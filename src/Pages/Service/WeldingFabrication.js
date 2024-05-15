import React from 'react';
import { FaTint } from "react-icons/fa";
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg';
import PageTitle from '../../components/PageTitle/PageTitle';
import serviceImg from '../../Assets/service2.jpg'

function WeldingFabrication() {
    return (
        <div>
            <OtherPagesBg
                title="Welding & Fabrication"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Welding & Fabrication"
                        subTitle="Service"
                        span="Service"
                    />

                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-6'>
                            <div className='image' style={{ marginBottom: '40px' }}>
                                <img src={serviceImg} alt="" />
                                <div className='imgText'>
                                    Welding & Fabication
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='text'>
                                    LE Tech welding and fabrication play critical roles in the construction, maintenance, and repair of infrastructure such as pipelines, storage tanks, offshore platforms, and drilling equipment.
                                </div>
                                <div className='card'>
                                    <div className='title'>
                                        LE Tech. Welding & Fabrication Services covers the following:
                                    </div>
                                    <div className='content'>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Pipeline Construction: </strong>
                                                Pipes are welded together to create long sections that can span great distances. Specialized welding techniques are used to ensure the integrity and strength of the welds, as pipelines must withstand high pressure and harsh environmental conditions.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Platform Fabrication:  </strong>LE Tech. Offshore drilling platforms and production facilities are often constructed from large steel structures.
                                            </span>
                                        </div>

                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                <strong>Storage Tanks:  </strong> We use specialized welding technique to create leak-proof seams that can withstand the high pressures and corrosive nature of the stored materials.
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

export default WeldingFabrication