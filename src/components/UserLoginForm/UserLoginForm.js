import React, {useState} from "react";
import './UserLoginForm.scss'
import { Navigate } from "react-router-dom";

const UserLoginForm = ({ userLogin }) => {
    console.log(userLogin)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
        
    // const handleLoginCredentials = (event) => {
    //     setUserName(event.target.value) 
    //     setPassword(`${userName}2022`)
    // }

    // const handlePasswordChange = event => {
    //     setPassword(event.target.value)
    // }

    const handleSubmit = event => {
        event.preventDefault()
        clearInputs()
        return userLogin.submitLogin(userLogin) ? Navigate('./home') : `Incorrect username or password, please try again.`
    }

    const clearInputs  = () => {
        setUserName('')
        setPassword('')
    }
    
    return(
        <form className= 'user-login-form' onSubmit={(event) => handleSubmit(event)}>
            <input 
                type="text"
                name="userName"
                placeholder="Enter your username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <input 
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