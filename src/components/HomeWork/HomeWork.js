import React from 'react';
import './HomeWork.scss';
import PageTitle from '../PageTitle/PageTitle';
import workImg from "../../Assets/workImg.jpg"
import transparentimg from '../../Assets/bg-shape1.png'

function HomeWork() {
    return (
        <div className='HomeWorkContainer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <PageTitle
                            span="Works"
                            subTitle="Works"
                            title="We've constructed a secure & personalised experience"
                        >
                            <div className='pageTitleText'>
                                We adopts project appraisal through incremental cash flow analysis, to
                                ensure that non-operating cash outflows are assessed. The three combination
                                of Cs being our focal point are customers, competition and change; and
                                these have ultimately created a new world for our business which is a
                                balanced scorecard, like the executive dashboard, is an essential tool the
                                new golden rule gives enormous power to those individuals and units.
                            </div>
                        </PageTitle>

                        <div className='row' style={{ paddingBottom: '30px' }}>
                            <div className='col-lg-6 col-sm-6'>
                                <div className='works-block'>
                                    <span className="works-subtitle">.01</span>
                                    <p className="text">We provide support and technical expertise throughout a project’s lifecycle.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-sm-6'>
                                <div className='works-block'>
                                    <span className="works-subtitle">.02</span>
                                    <p className="text">We ensure that each task is designed, risk assessed, executed and completed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='workImage'>
                            <img src={workImg} alt="" />
                            <div className='overlay'></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='transparentImg'>
                <img src={transparentimg} alt="" />
            </div>
        </div>
    )
}

export default HomeWork