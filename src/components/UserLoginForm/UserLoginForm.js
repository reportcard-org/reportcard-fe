import React, {useState} from "react";
import './UserLoginForm.scss'
import {v4 as uuidV4} from "uuid"

const UserLoginForm = ({ userLogin }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
        
    const handleUserNameChange = (event) => {
        setUserName(event.target.value) 
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

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
            <input 
                type="text"
                name="userName"
                placeholder="Enter your username"
                value={userName}
                onChange={(event) => handleUserNameChange(event.target.value)}
            />
            <input 
                type="text"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => handlePasswordChange(event.target.value)}
            />
            <button className='search-button' type='submit' disabled={!userName || !password }>Submit</button>
        </form>
    )

}

export default UserLoginForm;