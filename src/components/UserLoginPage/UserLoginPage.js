import React from 'react';
import './UserLoginPage.css';
import UserLoginForm from '../UserLoginForm/UserLoginForm';
import {  useNavigate } from 'react-router-dom';

const UserLoginPage = () => {
    const navigate = useNavigate()

    return (
        <div className='user-login-form-container'>
            <UserLoginForm />
            <button className='search-page' onClick={ () => navigate('/home') }>Continue as Guest</button>
        </div>
    )
}

export default UserLoginPage;