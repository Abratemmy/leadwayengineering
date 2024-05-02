import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import nondestructiveImg from '../../Assets/policy3.jpg'
import { FaTint } from "react-icons/fa";
import desImage1 from '../../Assets/desImage1.JPG'
import desImage2 from '../../Assets/desImage2.JPG'

function NonDestructive() {
    return (
        <div>
            <OtherPagesBg
                title="Non Destructive testing & evaluation"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Non Destructive testing & evaluation NDT & NDE"
                        subTitle="Service"
                        span="Service"
                    />

                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-6'>
                            <div className='image' style={{ marginBottom: '40px' }}>
                                <img src={nondestructiveImg} alt="" />


                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='mainTitle'>The Applications and Uses for NDT & NDE</div>
                                <div className='text'>
                                    There are many different techniques for applying NDT, and each is suited to a
                                    particular structure or equipment. We have the best NDT technicians and
                                    there are trained to employ the correct technique for the task.

                                </div>
                                <div className='text'>
                                    Conventional and advanced non-destructive testing (NDT) are key tools in
                                    establishing the condition of structures including individual bolts, pins and
                                    welds.
                                </div>

                                <div className='text'>
                                    In LE Tech. we employ specialized equipment and trained personnel to
                                    perform the testing and interpret the results.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-6'>
                            <div className='card'>
                                <div className='title'>
                                    And the following methods are being utilized by our organization for the NDT:
                                </div>
                                <div className='content'>
                                    <div className='text'>
                                        <FaTint className='icon' />
                                        <span>
                                            <strong>Liquid penetrant testing: </strong> This method involves applying a liquid
                                            penetrant to the surface of an object and then removing any excess
                                            penetrant. The penetrant is then drawn into any surface-breaking
                                            defects, where it can be seen with the naked eye or under ultraviolet
                                            light.
                                        </span>
                                    </div>
                                    <div className='text'>
                                        <FaTint className='icon' />
                                        <span>
                                            <strong> Phased array ultrasonic: </strong> This method uses multiple transducers to
                                            produce and control the ultrasonic waves that are used to inspect a
                                            material or component.
                                        </span>
                                    </div>
                                    <div className='text'>
                                        <FaTint className='icon' />
                                        <span>
                                            <strong>  Ultrasonic testing: </strong> This method uses high-frequency sound waves to
                                            detect internal defects or measure the thickness of materials.
                                        </span>
                                    </div>
                                    <div className='text'>
                                        <FaTint className='icon' />
                                        <span>
                                            <strong>  Radiographic testing: </strong> This method uses X-rays or gamma rays to create
                                            an image of the internal structure of an object, allowing for the
                                            detection of flaws or defects.
                                        </span>
                                    </div>

                                    <div className='text'>
                                        <FaTint className='icon' />
                                        <span>
                                            <strong>  Magnetic particle testing: </strong> This method uses a magnetic field to detect
                                            surface or slightly subsurface discontinuities in ferromagnetic material.
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='desImage'>
                                <img src={desImage1} alt="" />
                            </div>

                            <div className='desImage'>
                                <img src={desImage2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NonDestructive