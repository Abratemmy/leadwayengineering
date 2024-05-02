import React from 'react';
import './Service.scss';
import OtherPagesBg from '../../components/OtherPages/OtherPagesBg';
import HomeService from '../../components/HomeService/HomeService';

function MainService() {
    return (
        <div>
            <OtherPagesBg
                title="Our Services"
            />

            <div className='MainServices'>
                <HomeService />
            </div>
        </div>
    )
}

export default MainService