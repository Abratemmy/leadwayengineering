import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "./PageButton.scss"


function PageButton({ goToNav, name }) {
    return (
        <div>
            <NavLink to={`/${goToNav}`} className="pagebutton">
                <span className='btn-arrow before'>
                    <IoIosArrowRoundForward className="icon" />
                </span>
                {name}
                <span className='btn-arrow after'>
                    <IoIosArrowRoundBack className="icon" />
                </span>
            </NavLink>
        </div>
    )
}

export default PageButton