import React, { useState } from "react";
import './UserLoginForm.scss'
// import { v4 as uuidV4 } from "uuid"
// import { useLazyQuery, gql } from '@apollo/client';

const UserLoginForm = ({ submitLogin }) => {
    const [userCredentials, setUserCredentials] = useState("")
    // const [password, setPassword] = useState("")

    // const { error, loading, data } = useQuery(USER_LOGIN_QUERY, {
    //     getEmail() variables: {
    //         email: email
    //     }})

        // const [getEmail, {loading, data, error}] = useLazyQuery(USER_LOGIN_QUERY);
        
        const handleSubmit = (event) => {
            event.preventDefault()
            // getEmail({
            //     variables: {
            //         email: userCredentials
            //     }
            // })
            submitLogin(userCredentials)
            clearInputs()
    }




    const clearInputs = () => {
        setUserCredentials('')
        // setPassword('')
    }

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
{/* 
            <input 
                className='password-input'
                type="text"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            /> */}

            <button className='login-button' type='submit' disabled={!userCredentials}>Login</button>

            {/* <button className='login-button' type='submit' disabled={!userCredentials || !password }>Login</button> */}

        </form>
    )

}

export default UserLoginForm;