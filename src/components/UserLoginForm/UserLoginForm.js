import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserLoginForm.scss'

const UserLoginForm = ({ submitLogin }) => {
    const navigate = useNavigate()

    const [userCredentials, setUserCredentials] = useState("")
  
    const handleSubmit = (event) => {
            event.preventDefault()
            submitLogin(userCredentials)
            navigate("/home")
            clearInputs()
    }

    const clearInputs = () => {
        setUserCredentials('')
    }

    return(
        <form className= 'user-login-form' onSubmit={(event) => handleSubmit(event)}>
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

            <button className='login-button' type='submit' disabled={!userCredentials}>Login</button>

        </form>
    )
}

export default UserLoginForm;