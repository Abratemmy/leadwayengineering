import React from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import './Home.scss'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import HomeService from '../../components/HomeService/HomeService'
import HomeWork from '../../components/HomeWork/HomeWork'
import PageButton from '../../components/PageButton/PageButton';
import policy2 from '../../Assets/policy2.jpg'
function Home() {
    return (
        <div>
            <HomeBanner />
            <HomeAbout />
            <HomeService
                page='HomePage'
            />
            <HomeWork />

            <div className='connectToContact'>
                <div className='overlay'></div>
                <div className='container'>
                    <div className='content'>
                        <div className='subTitle'>Connect with us</div>
                        <div className='title'>Leadway Engineering Technologies is ready to connect with you</div>
                        <p>Block 4, Road O, London Estate Phase 2, Umuebulu Etche LGA, Rivers State</p>
                        <PageButton
                            goToNav="contact"
                            name="Contact us"
                        />
                    </div>
                </div>
            </div>

            <div className='imageDisplay'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='image'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1714653929/LeadwayEngineering/eng3_mftllh.jpg" alt="" />
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='image'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1714653928/LeadwayEngineering/eng1_vpotyi.jpg" alt="" />
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='image'>
                                <img src={policy2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home