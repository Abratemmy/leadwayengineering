import React from 'react'
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import PageTitle from '../../components/PageTitle/PageTitle'

function Integritytest() {
    return (
        <div>
            <OtherPagesBg
                title="Integrity Test"
            />

            <div className='ServicesMain'>
                <div className='container'>
                    <PageTitle
                        title="Integrity Test"
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
                                    Integrity Test
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='serviceContent'>
                                <div className='text'>
                                    LE Tech. integrity testing is crucial for ensuring the safety, reliability, and regulatory compliance of equipment and infrastructure. These tests help identify and mitigate potential risks, such as leaks, corrosion, and structural weaknesses, which could lead to accidents or environmental damage.

                                </div>

                                <div className='text'>
                                    Our Integrity testing is typically conducted regularly as part of a comprehensive integrity management program to ensure the continued safe and reliable operation of oil and gas facilities.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integritytest