import React from 'react'
import PolicyComponent from './PolicyComponent'

function WasteManagement() {
    return (
        <div>
            <PolicyComponent
                otherPagesTitle="WASTE MANAGEMENT POLICY"
                pageTitle="WASTE MANAGEMENT POLICY"
                pageSpan="Policy"
                pageSubtitle="WASTE MANAGEMENT"
                policyCard="Waste Management"

            >
                <div className='policyText'>
                    <div className='text'>
                        This policy is made to eliminate waste hazards to the environment, personnel, and the general public.
                    </div>

                    <div className='text'>
                        Leadway Engineering Technology Ltd shall, before the execution of any given task, assess the source, type and quality of waste that shall be generated, and ensure that acceptable methods of waste collection is put in place, for evacuation.
                    </div>

                    <div className='text'>
                        Services of environmental and waste management consultants shall be employed on needs basis.
                    </div>

                    <div className='text'>
                        And, such companies shall be monitored to ensure appropriate evacuation procedure is deployed.
                    </div>
                </div>

            </PolicyComponent>
        </div>
    )
}

export default WasteManagement