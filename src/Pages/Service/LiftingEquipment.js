import React from 'react'
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import PageTitle from '../../components/PageTitle/PageTitle';
import { FaTint } from "react-icons/fa";
import lifting from '../../Assets/lifting.jpg';
import lift1 from '../../Assets/lift1.JPG'
import lift2 from '../../Assets/lift2.JPG'
import lift3 from '../../Assets/lift3.JPG'
import lift4 from '../../Assets/lift4.JPG'

function LiftingEquipment() {
    return (
        <div>
            <OtherPagesBg
                title="Lifting Equipment & Inspection Services"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Lifting Equipment & Inspection Services"
                        subTitle="Service"
                        span="Service"
                    />

                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-6'>
                            <div className='image' style={{ marginBottom: '40px' }}>
                                <img src={lifting} alt="" />


                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='text'>
                                    LE Tech. is capable of handling all your industrial lifting needs for exploration
                                    and production companies. We also handle your lifting equipment inspection
                                    service. We also supply all lifting devices of various sorts.

                                </div>
                                <div className='text'>
                                    Our Spider crane: These innovative and highly specialised machines are
                                    designed to tackle projects where larger conventional cranes cannot access
                                    or operate efficiently. Our Mini Spider Cranes is Mobile and compact and can
                                    be folded into a cuboid shape for easy transport into tight locations. The legs
                                    can then be extended to give the crane a wider centre of gravity for
                                    increased lifting strength which is disproportional to the size of the crane.

                                </div>

                                <div className='card'>
                                    <div className='title'>
                                        LE Tech. Lifting Equipment & Inspection Services covers the following types:
                                    </div>
                                    <div className='content'>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                Spider Crane Lifting a porter
                                            </span>
                                        </div>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                Lifting Devices
                                            </span>
                                        </div>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                Lifting Pipeline in Position
                                            </span>
                                        </div>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                Construction Lifting
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                            <div className='liftImg'>
                                <div className='imageContainer'>
                                    <img src={lift1} alt="" />
                                    <div className="name" >Spider Crane Lifting a porter cabin</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                            <div className='liftImg'>
                                <div className='imageContainer'>
                                    <img src={lift2} alt="" />
                                    <div className="name" >Lifting Devices</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                            <div className='liftImg'>
                                <div className='imageContainer'>
                                    <img src={lift3} alt="" />
                                    <div className="name" >Lifting Pipeline in Position</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6'>
                            <div className='liftImg'>
                                <div className='imageContainer'>
                                    <img src={lift4} alt="" />
                                    <div className="name" >Construction Lifting Equipment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiftingEquipment