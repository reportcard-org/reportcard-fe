import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserLoginForm.scss'

const UserLoginForm = ({ submitLogin, queryError }) => {
    const navigate = useNavigate()
    const [ userCredentials, setUserCredentials ] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        submitLogin(userCredentials)
        navigate("/home")
        clearInputs()
        submitLogin(userCredentials, userPassword)
    }

    const clearInputs = () => {
        setUserCredentials('')
        setUserPassword("")
    }

    return (
        <form className='user-login-form' onSubmit={(event) => handleSubmit(event)}>
            <div className="welcome-message">
                Welcome to ReportCard!
            </div>
            <input
                className='user-name-input'
                type="text"
                name="userCredentials"
                placeholder="Enter your email"
                value={userCredentials}
                onChange={(event) => setUserCredentials(event.target.value)}
            />
            <input
                className='password-input'
                type="text"
                name="userPassword"
                placeholder="Enter your password"
                value={userPassword}
                onChange={() => setUserPassword("welcome2022")}
            />
            {queryError && <p>User not found. Check the email and try again</p>}
            <button className='login-button' type='submit' disabled={!userCredentials && !userPassword}>Login</button>
        </form>
    )
}

export default UserLoginForm;