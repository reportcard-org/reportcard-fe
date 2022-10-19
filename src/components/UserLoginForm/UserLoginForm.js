import React, { useState } from "react";
import './UserLoginForm.scss'
import { v4 as uuidV4 } from "uuid"

const UserLoginForm = ({ submitLogin }) => {
    console.log(submitLogin)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // const handleLoginCredentials = event => {
    //     // setUserName(event.target.value) 
    //     // setPassword(`${userName}2022`)
    // }

    // const handlePasswordChange = event => {
    //     setPassword(event.target.value)
    // }

    const handleSubmit = event => {
        event.preventDefault()
        let userLoginCredentials = {
            id: uuidV4(),
            userName: setUserName(''),
            password: setPassword(`${this.userName}2022`)
        }
        submitLogin(userLoginCredentials)
        console.log(this.userLoginCredentials.userName)
        clearInputs()
    }

    const clearInputs = () => {
        setUserName('')
        setPassword('')
    }

    return (
        <form className='user-login-form' onSubmit={(event) => handleSubmit(event)}>
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
            <button className='login-button' type='submit' disabled={!userName || !password}>Login</button>
        </form>
    )

}

export default UserLoginForm;