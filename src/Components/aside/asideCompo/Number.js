import React from 'react';
import { RiUser6Line } from "react-icons/ri";
import '../../../assets/number.css';

function Number() {
    return (
        <div className='number-container  flex'>
            <div className='flex user flex-align-c'>
                <div className='user-icon'>
                    <RiUser6Line color='#a9a9a9' className='num-icon'/>
                </div>
                <div className='user-info'>
                    <h2>+91 9566451961</h2>
                    <p className='secondary-text'>FREE</p>
                    <button className='num-btn btn-primary'>GO PRO</button>
                </div>
            </div>
            <button className='num-btn btn-secondary'>Log Out</button>
        </div>
    )
}

export default Number
