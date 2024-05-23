import React from 'react'
import PolicyComponent from './PolicyComponent'

function QualityPolicy() {
    return (
        <div>
            <PolicyComponent
                otherPagesTitle="Quality Policy Statement"
                pageTitle="Quality Policy Statement"
                pageSpan="Policy"
                pageSubtitle="Quality Policy"
                policyCard="Quality Policy Statement"
            >
                <div className='policyText'>
                    <div className='text'>
                        The management and staff of Leadway Engineering Technologies Ltd, are committed to meeting all applicable requirements in the provision of quality engineering/technical services, through the use of experienced/certified professionals,
                        improved processes and periodic review for continual improvement.
                    </div>
                </div>

            </PolicyComponent>
        </div>
    )
}

export default QualityPolicy