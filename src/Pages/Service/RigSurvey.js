import React from 'react'
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import PageTitle from '../../components/PageTitle/PageTitle'
import rig from '../../Assets/rig.jpg'
import rig2 from '../../Assets/rig2.jpg'
import rig3 from '../../Assets/rig3.jpg'
import rig4 from '../../Assets/rig4.jpg'
import rig5 from '../../Assets/rig5.jpg'
import rig6 from '../../Assets/rig6.jpg'
import { FaTint } from "react-icons/fa";

function RigSurvey() {
    return (
        <div>
            <OtherPagesBg
                title="Rig Survey"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Rig Survey/Facility Inspection"
                        subTitle="Service"
                        span="Service"
                    />
                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-6'>
                            <div className='image'>
                                <img src={rig} alt="" />
                                <div className='image2'>
                                    <img src={rig2} alt="" className='img2' />
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='text'>
                                    LE Tech. will play a supportive role on a periodic rig survey, pre-modification
                                    inspection, specific equipment inspections or a complete rig reactivation.

                                </div>
                                <div className='text'>
                                    We offer comprehensive tubular inspection service of new or used equipment
                                    to ensure reliable and safe operation of a drilling operation at the rig.
                                </div>

                                <div className='card'>
                                    <div className='title'>
                                        LE Tech. Survey & Inspection Services covers the following rig types:
                                    </div>

                                    <div className='content'>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                Jack-Up Rigs
                                            </span>
                                        </div>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                Platform Rigs
                                            </span>
                                        </div>
                                        <div className='text'>
                                            <FaTint className='icon' />
                                            <span>
                                                Land Rigs
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* another section here */}

                    <div className='inspection' style={{ paddingTop: '50px' }}>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='content'>
                                    <div className='mainTitle'>
                                        Facility Inspection:

                                    </div>

                                    <div className='text'>
                                        We also undertake the systematic examination and evaluation of a physical
                                        asset, such as buildings or equipment, to assess its condition, safety, and
                                        compliance with regulations; this can otherwise be referred to as facility
                                        inspection. We establish the facility inspection checklist which will enable us to
                                        accurately report back to our client.
                                    </div>

                                    <div className='text'>
                                        Conducting regular facility inspections is a cornerstone of effective facility
                                        management. Facility management is a critical aspect of ensuring that
                                        businesses’ operations run smoothly.
                                    </div>

                                    <div className='text'>
                                        Regular inspection should be done on all facilities and equipment. It is
                                        advisable to conduct regular inspections, which will enable faults and
                                        potential failures at their early stages to be detected, corrected, fixed with
                                        minimal work and cost.
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='inspectionImage'>
                                    <div className='overlay'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='insImage'>
                                                    <img src={rig6} alt="" />
                                                    <div className='name'>Survey and Inspection Services</div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='insImage'>
                                                    <img src={rig5} alt="" />
                                                    <div className='name'>Rig Positioning Survey</div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='insImage'>
                                                    <img src={rig3} alt="" />
                                                    <div className='name'>Facility inspection tour</div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='insImage'>
                                                    <img src={rig4} alt="" />
                                                    <div className='name'>Facility Inspectors at work</div>
                                                </div>
                                            </div>
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

export default RigSurvey