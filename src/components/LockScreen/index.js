import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import './index.css';
const LockScreen = () => {
    return (
        <div>
            <div className="lockscreen-bg"></div>
            <div className='profile-container'>
                    <div className="profile-picture"></div>
                    <div className='username-container'>
                        <p className='username'>Richard Igbiriki</p>
                    </div>
                    <div className='form'>
                        <div className='input-container'>
                            <input className='password-field' type="password" placeholder="Enter Password" />
                            <span ><FaArrowAltCircleRight className='login-button' /></span>
                        </div>
                    </div>
                </div>
                <div className='cancel-container' >
                    <MdClose className='cancel-icon' />
                    <p className='cancel-button'> Cancel </p>
                </div>
        </div>
    )
}
export default LockScreen;