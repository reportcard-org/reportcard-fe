import React from 'react';
import './NavBar.scss';
import UserInfo from '../UserInfo/UserInfo'

const NavBar = ({ userLoginEmail, signedOutUser }) => {
    console.log('hello')
        return (
            <div className='nav-bar'>
                <div className='logo-and-buttons'>
                    <div className='logo'>
                        ReportCard ✅
                    </div>
                    <UserInfo userLoginEmail={userLoginEmail} signedOutUser={signedOutUser} />
                </div>
            </div>
        )
    }

export default NavBar;