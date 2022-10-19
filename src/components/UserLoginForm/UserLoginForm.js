import React, {useState} from "react";
import './UserLoginForm.scss'
import {v4 as uuidV4} from "uuid"

const UserLoginForm = ({ userLogin }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
        
    // const handleUserNameChange = (event) => {
    //     setUserName(event.target.value) 
    // }

    // const handlePasswordChange = event => {
    //     setPassword(event.target.value)
    // }

    const handleSubmit = event => {
        event.preventDefault()
        let userLoginCredentials = {
            id: uuidV4(),
            userName,
            password
        }
        userLogin(userLoginCredentials)
        clearInputs()
    }

    const clearInputs  = () => {
        setUserName('')
        setPassword('')
    }
        
    return(
        <form className= 'user-login-form' onSubmit={(event) => handleSubmit(event)}>
            <div className="welcome-message">
                Welcome to ReportCard!
            </div>
            <input 
                className='user-name-input'
                type="text"
                name="userName"
                placeholder="Enter your username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <input 
                className='password-input'
                type="text"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button className='login-button' type='submit' disabled={!userName || !password }>Login</button>
        </form>
    )

}

export default UserLoginForm;