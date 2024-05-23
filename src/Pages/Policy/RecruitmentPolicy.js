import React from 'react'
import PolicyComponent from './PolicyComponent'

function RecruitmentPolicy() {
    return (
        <div>
            <PolicyComponent
                otherPagesTitle="RECRUITMENT POLICY"
                pageTitle="RECRUITMENT POLICY"
                pageSpan="Policy"
                pageSubtitle="RECRUITMENT"
                policyCard="Recruitment Policy"

            >
                <div className='policyText'>
                    <div className='text'>
                        It is the policy of Leadway Engineering Technologies Ltd to recruit and retain the most qualified candidate needed, for effective and efficient service to our customers.
                    </div>

                    <div className='text'>
                        This is achieved through an interview process, conducted by a recruitment agency, or our HR department.This is achieved through an interview process, conducted by a recruitment agency, or our HR department.
                    </div>

                    <div className='text'>
                        We shall demonstrate the principle of equality and fairness in the recruitment process at all times.
                    </div>

                    <div className='text'>
                        This policy shall be reviewed from time to time for continuous improvement.
                    </div>
                </div>

            </PolicyComponent>
        </div>
    )
}

export default RecruitmentPolicy