import React from 'react'
import PolicyComponent from './PolicyComponent'
import { CgEditBlackPoint } from "react-icons/cg";

function EnvironmentalPolicy() {
    return (
        <div>
            <PolicyComponent
                otherPagesTitle="ENVIRONMENTAL POLICY"
                pageSpan="Policy"
                pageSubtitle="ENVIRONMENTAL POLICY"
                policyCard="Environmental Policy"

            >
                <div className='policyText'>
                    <div className='text'>
                        The management and staff of Leadway Engineering Technologies Ltd are committed to complying with all applicable legal requirements, national and international standards.
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            The environment shall always be considered in all LETECH activities, to ensure environmental protection.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            All LETECH activities shall be carried out in controlled manner that guarantees ZERO impact to environment.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            LETECH shall prevent environmental pollution by:
                        </span>
                        <ol>
                            <li>Minimizing releases to the air, water and land.</li>
                            <li>Striving to use energy and natural resources, in an efficient manner.</li>
                            <li>Workers shall be trained on the content of this policy</li>
                        </ol>
                    </div>

                    <div className='text'>
                        The management of LETECH shall periodically review the performance of the environmental management system for continual improvement.
                    </div>

                </div>

            </PolicyComponent>
        </div>
    )
}

export default EnvironmentalPolicy