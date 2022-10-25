import React from 'react';
import './SignInNavBar.scss';
import { useNavigate } from 'react-router-dom';

const SignInNavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='nav-bar'>
            <div className='logo-and-buttons'>
                <button onClick={() => navigate('/home')} className='logo'>
                    ReportCard ✅
                </button>
                <div className='nav-button-container'>
                </div>
            </div>
        </div>
    )
}

export default SignInNavBar;