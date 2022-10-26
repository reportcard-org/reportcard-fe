import React from 'react';
import './UserLoginPage.scss';
import UserLoginForm from '../UserLoginForm/UserLoginForm';
import { useNavigate } from 'react-router-dom';

const UserLoginPage = ({ submitLogin, queryError }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home')
        window.location.reload(false)
    }

    return (
        <div className='user-login-form-container'>
            <UserLoginForm
                queryError={queryError}
                submitLogin={submitLogin}
            />
            {queryError ? <button className='guest-button' onClick={() => handleClick()}>Continue as Guest</button> : <button className='guest-button' onClick={() => navigate('/home')}>Continue as Guest</button>}
            <button className='overview-button' onClick={() => navigate('/')}>Back to Overview</button>
        </div>
    )
}

export default UserLoginPage;