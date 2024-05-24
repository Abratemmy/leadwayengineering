import React from 'react'
import PolicyComponent from './PolicyComponent'

function AntiBeberyPolicy() {
    return (
        <div>
            <PolicyComponent
                otherPagesTitle="ANTI BRIBERY AND CORRUPTION POLICY"
                pageSpan="Policy"
                pageSubtitle="ANTI BRIBERY & CORRUPTION POLICY"
                policyCard="Anti Bribery & Corruption Policy"
                isDrugPage="True"
            >
                <div className='policyText'>
                    <div className='text'>
                        The purpose of this policy in Leadway Engineering Technologies Ltd is to ensure that all LETECH employees and third-party contractors comply to our zero-tolerance position on bribery and corruption.
                    </div>

                    <div className='text'>
                        LETECH is committed to conducting business in an ethical and honest manner.
                    </div>

                    <div className='text'>
                        This Anti-Bribery policy applies to all employees (whether temporary or permanent), trainees or any of our subsidiaries, or their employees
                    </div>

                    <div className='text'>
                        This policy also applies to board members and all our partners.
                    </div>

                    <div className='text'>
                        Any arrangement our company makes with a third party is subject to clear contractual terms, including specific provisions that require the third party to comply with minimum standards and procedures relating to anti-bribery and corruption.
                    </div>
                </div>
            </PolicyComponent>


        </div>
    )
}

export default AntiBeberyPolicy