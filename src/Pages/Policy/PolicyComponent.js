import React from 'react'
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg'
import PageTitle from '../../components/PageTitle/PageTitle'
import { CgEditBlackPoint } from "react-icons/cg";
import policy1 from "../../Assets/policy1.jpg"
import policy2 from "../../Assets/policy2.jpg"
import policy3 from "../../Assets/policy3.jpg"
import './Policy.scss'


function PolicyComponent({ isDrugPage, otherPagesTitle, pageSubtitle, pageSpan, policyCard, children }) {
    return (
        <div>
            <OtherPagesBg
                title={otherPagesTitle}
            />

            <div className='policyContainer'>
                <div className='container'>
                    <PageTitle
                        subTitle={pageSubtitle}
                        span={pageSpan}
                    />

                    <div className='policyMainContainer'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div className='policyWrapper'>
                                    <div>
                                        <div className='subTitle'>{policyCard}</div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7'>

                                {children}
                            </div>
                        </div>
                    </div>

                    {isDrugPage === "True" && (
                        <div style={{ marginTop: '30px' }}>
                            <PageTitle
                                title=""
                                subTitle="Bribery"
                                span="POLICY"
                            />

                            <div className='policyText'>
                                <div className='text'>
                                    Bribery refers to the act of giving, promising, asking, and receiving, accepting or soliciting something of value, so as to induce or influence an action or decision.
                                </div>
                                <div className='text'>
                                    A bribe refers to any inducement, reward, or item offered to another individual in order to gain commercial, contractual, regulatory, or personal advantage.
                                </div>

                                <div className='text'>
                                    Bribery is not limited to the act of offering a bribe. If an individual is on the receiving end of a bribe and he accepts it, he is also breaking the law.
                                </div>
                                <div className='text'>
                                    Bribery is illegal. LETECH employees must not engage in any form of bribery, whether directly or indirectly.
                                </div>
                                <div className='text'>
                                    We must not bribe a foreign public official anywhere in the world.
                                </div>
                                <div className='text'>
                                    LETECH accepts normal and appropriate gestures of hospitality and goodwill (whether to/received from third parties) so long as the giving or receiving of gift meets the underlisted requirements:
                                </div>
                                <div className='text'>
                                    <CgEditBlackPoint className='icon' />
                                    <span>
                                        It is not made with the intention of influencing the party to whom it is being given.
                                    </span>
                                </div>

                                <div className='text'>
                                    <CgEditBlackPoint className='icon' />
                                    <span>
                                        It is not made with the suggestion that a return favour is expected.
                                    </span>
                                </div>

                                <div className='text'>
                                    <CgEditBlackPoint className='icon' />
                                    <span>
                                        It is in compliance with local law.
                                    </span>
                                </div>

                                <div className='text'>
                                    <CgEditBlackPoint className='icon' />
                                    <span>
                                        It is given in the name of company, not in an individual’s name.
                                    </span>
                                </div>

                                <div className='text'>
                                    <CgEditBlackPoint className='icon' />
                                    <span>
                                        It is appropriate for the circumstances (e.g. giving small gifts around Christmas or as a small thank you to a company for helping in project completion.
                                    </span>
                                </div>

                                <div className='text'>
                                    As an employee of LETECH, you must ensure that you read, understand, and comply with the information contained within this policy, and with the training or other anti-bribery and corruption information you are given.
                                </div>
                                <div className='text'>
                                    All employees and those under our control are equally responsible for the prevention, detection, and reporting of bribery and other forms of corruption. They are required to avoid any activities that could lead to a breach of this anti-bribery policy.
                                </div>

                                <div className='text'>
                                    Any employee who has reason to believe or suspect that an instance of bribery or corruption has occurred or will occur in the future that breaches this policy must notify the top management through his line manager.
                                </div>
                                <div className='text'>
                                    LETECH reserves the right to terminate a contractual relationship with any employee who breaches this anti-bribery policy.
                                </div>
                                <div className='text'>
                                    WHISTLE BLOWING AND PROTECTION FOR WHISTLE BLOWER
                                </div>
                                <div className='text'>
                                    If you suspect that there is an instance of bribery or corrupt activities occurring in relation to LETECH, you are encouraged to raise your concerns as early as possible. If you are you are in doubt about whether a certain action or behavior can be considered bribery or corruption, you should speak to your line manager.
                                </div>
                                <div className='text'>
                                    All LETECH staff shall be familiarized with the procedures of whistle blowing to enable swift actions in the event of bribery or corruption practices.
                                </div>
                            </div>
                        </div>
                    )}

                </div>


                <div className='Picture' style={{ marginTop: '40px' }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='image'>
                                    <img src={policy1} alt="" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='image'>
                                    <img src={policy2} alt="" />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='image'>
                                    <img src={policy3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PolicyComponent