import React from 'react';
import './SignInNavBar.scss';
import { useNavigate } from 'react-router-dom';

const SignInNavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='sign-in-nav-bar'>
            <div className='sign-in-logo-and-buttons'>
                <button onClick={() => navigate('/home')} className='logo'>
                    ReportCard ✅
                </button>
                <div className='sign-in-nav-button-container'>
                </div>
            </div>
        </div>
    )
}

export default SignInNavBar;