import React from 'react'
import PolicyComponent from './PolicyComponent'
import { CgEditBlackPoint } from "react-icons/cg";

function OccupationalPolicy() {
    return (
        <div>
            <PolicyComponent
                otherPagesTitle="OCCUPATIONAL HEALTH & SAFETY POLICY"
                pageSpan="Policy"
                pageSubtitle="Occupational Health & Safety Policy"
                policyCard="Occupational Health & Safety Policy"

            >
                <div className='policyText'>
                    <div className='text'>
                        This occupational health and Safety Management System complies with all applicable legal requirements, national and international standards.
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            Top priority shall be given to health and safety in all LETECH activities, so as to ensure safe work environment, and prevent work related incidents.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            Hazards shall be identified, assessed and controlled, so as to ensure ZERO fatality and lost time injuries.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            Workforce shall be trained and encouraged to protect personnel, clients and visitors’ health.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            All employees shall be assessed on their attitudes and performances towards occupational health and safety.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            Management shall continuously review the performance of OH&S Management System for continual improvement.
                        </span>
                    </div>


                </div>

            </PolicyComponent>
        </div>
    )
}

export default OccupationalPolicy