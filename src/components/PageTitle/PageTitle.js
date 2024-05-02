import React from 'react';
import './PageTitle.scss'

function PageTitle({ children, span, subTitle, title }) {
    return (
        <div className='PageTitleContainer'>
            <div className='section'>
                <div className='titleTransparent'>
                    <span>{span}</span>
                </div>
                <div className='subTitle'>{subTitle}</div>
                <h3 className='title'>{title}</h3>
                {children}
            </div>
        </div>
    )
}

export default PageTitle