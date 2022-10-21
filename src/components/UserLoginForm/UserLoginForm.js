import React, { useState } from "react";
import './UserLoginForm.scss'
// import { v4 as uuidV4 } from "uuid"
import { useQuery, gql } from '@apollo/client';

const USER_LOGIN_QUERY = gql`
  query {
    user(email: "meagan@stark.org") {
        name
        email
        id
    }
  }
`;

const UserLoginForm = ({ submitLogin }) => {
    const { data } = useQuery(USER_LOGIN_QUERY)
    console.log('DATA', data)
    const [userName, setUserName] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        let userLoginCredentials = {
            userName: userName,
            // password: setPassword(`${this.userName}2022`)
        }
        submitLogin(userLoginCredentials)
        clearInputs()
    }

    const clearInputs = () => {
        setUserName('')
        // setPassword('')
    }


    // const [password, setPassword] = useState("")

    // const handleLoginCredentials = event => {
    //     // setUserName(event.target.value) 
    //     // setPassword(`${userName}2022`)
    // }

    // const handleUserNameChange = (event) => {
    //     setUserName(event.target.value) 
    // }


    // const handlePasswordChange = event => {
    //     setPassword(event.target.value)
    // }


    return (
        <form className='user-login-form' onSubmit={(event) => handleSubmit(event)}>
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
            {/* 
            <input 
                className='password-input'
                type="text"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            /> */}

            <button className='login-button' type='submit' disabled={!userName}>Login</button>

            {/* <button className='login-button' type='submit' disabled={!userName || !password }>Login</button> */}

        </form>
    )

}

export default UserLoginForm;