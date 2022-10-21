import React from 'react';
// import './UserLoginPage.scss';
import UserLoginForm from '../UserLoginForm/UserLoginForm';
import {  useNavigate } from 'react-router-dom';

const UserLoginPage = ({ submitLogin }) => {
    const navigate = useNavigate()
 
    return (
        <div className='user-login-form-container'>
            <UserLoginForm submitLogin={submitLogin}/>
            <button className='guest-button' onClick={ () => navigate('/home') }>Continue as Guest</button>
        </div>
    )
}

export default UserLoginPage;