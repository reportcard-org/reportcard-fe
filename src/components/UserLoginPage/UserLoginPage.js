import React from 'react';
import './UserLoginPage.css';
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div className='user-login-form-container'>
            LoginPage WILL EXIST HERE
            <button className='search-page' onClick={ () => navigate('/home') }>Continue as Guest</button>
        </div>
    )
}

export default LoginPage;