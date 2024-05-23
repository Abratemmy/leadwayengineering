import React from 'react'
import PolicyComponent from './PolicyComponent'
import { CgEditBlackPoint } from "react-icons/cg";

function LocalContentPolicy() {
    return (
        <div>
            <PolicyComponent
                otherPagesTitle="LOCAL CONTENT DEVELOPMENT POLICY"
                pageTitle="LOCAL CONTENT DEVELOPMENT POLICY"
                pageSpan="Policy"
                pageSubtitle="LCD Policy"
                policyCard="Local Content Development"

            >
                <div className='policyText'>
                    <div className='text'>
                        Leadway Engineering Technologies Ltd is committed to the development of local content.
                    </div>
                    <div className='text'>
                        We demonstrate our commitment in the following ways:
                    </div>
                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            Leadway Engineering Technologies Ltd is 100% Nigerian, as contained in the directors’ form.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            Leadway Engineering Technologies Ltd sources project materials in country, except where such materials cannot be sourced locally.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            We maximize local content participation in the oil and gas industry in Nigeria.
                        </span>
                    </div>

                    <div className='text'>
                        <CgEditBlackPoint className='icon' />
                        <span>
                            We shall train our personnel in some key technical areas, in compliance with our local content policy.
                        </span>
                    </div>


                </div>

            </PolicyComponent>
        </div>
    )
}

export default LocalContentPolicy