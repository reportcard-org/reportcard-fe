import React from 'react';
import './UserLoginPage.css';
import {  useNavigate } from 'react-router-dom';
import UserLoginForm from '../UserLoginForm/UserLoginForm';

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div className='user-login-form-container'>
            <UserLoginForm />
            <button className='search-page' onClick={ () => navigate('/home') }>Continue as Guest</button>
        </div>
    )
}

export default LoginPage;