import React from 'react';
import './OtherPagesBg.scss'
import { NavLink } from 'react-router-dom';

function OtherPagesBg({ title }) {
    return (
        <div className='otherPagesContainer'>
            <div className='overlay'></div>
            <div className='title'>{title}</div>
            <div className='content'>
                <NavLink to="/" className="otherNav">Home</NavLink>
                <span>/</span>
                <div className='subtitle'>{title}</div>
            </div>
        </div>
    )
}

export default OtherPagesBg