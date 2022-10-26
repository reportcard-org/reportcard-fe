import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserLoginForm.scss'

const UserLoginForm = ({ submitLogin }) => {
    const navigate = useNavigate()

    const [ userCredentials, setUserCredentials ] = useState("")
    // const [userPassword, setUserPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        submitLogin(userCredentials)

        // submitLogin(userCredentials, userPassword)
        navigate("/home")
        clearInputs()
    }

    const clearInputs = () => {
        setUserCredentials('')
        // setUserPassword("")
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
            {/* <input
                className='password-input'
                type="text"
                name="userPassword"
                placeholder="Enter your password"
                value={userPassword}
                onChange={() => setUserPassword("welcome2022")}
            /> */}

            <button className='login-button' type='submit' disabled={!userCredentials}>Login</button>
            {/* <button className='login-button' type='submit' disabled={!userCredentials && !userPassword}>Login</button> */}

        </form>
    )
}

export default UserLoginForm;