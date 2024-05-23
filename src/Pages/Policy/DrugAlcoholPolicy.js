import React from 'react'
import PolicyComponent from './PolicyComponent'

function DrugAlcoholPolicy() {
    return (
        <div>
            <PolicyComponent
                otherPagesTitle="DRUG AND ALCOHOL POLICY"
                pageTitle="DRUG AND ALCOHOL POLICY"
                pageSpan="Policy"
                pageSubtitle="DRUG AND ALCOHOL"
                policyCard="Drug & Alcohol"

            >
                <div className='policyText'>
                    <div className='text'>
                        Leadway Engineering Technologies Ltd is committed to ensuring a safe and healthy working environment, through promoting a drug free workplace, for optimal productivity.
                    </div>

                    <div className='text'>
                        By this policy, personnel are forbidden from taking alcohol/drugs at work place.
                    </div>

                    <div className='text'>
                        Random alcohol test is also carried out, from time to time, to ensure compliance.
                    </div>

                    <div className='text'>
                        Management consequences apply to employees who choose to violate this policy.
                    </div>
                </div>

            </PolicyComponent>
        </div>
    )
}

export default DrugAlcoholPolicy