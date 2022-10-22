import React, { useState } from 'react';
import './NavBar.scss';
import {  useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const NavBar = ({userLoginEmail}) => {
    // console.log(userLoginEmail)
    const navigate = useNavigate()
    const[user, setUser] = useState('')

    const USER_LOGIN_QUERY = gql`
        query user($email: String!){
            user(email: $email){
                name
                email
                id
            }
        }
        `;

      const { error, loading, data } = useQuery(USER_LOGIN_QUERY, {
        variables: {
            email: userLoginEmail
        }
      })

      if(data) {
          
          return (
              console.log(data.user)
          
          )  
    } 
    

        // setUser(data)
      

    //   if (error) return (
    //     navigate('/')
    //   )
        
      if (loading) return (
        <div className='nav-bar'>
            <div className='logo-and-buttons'>
                <div className='logo'>
                    ReportCard ✅ 
                    <h1>Loading...</h1>
                </div>
            <div className='nav-button-container'>
                <button className='go-to-favorites-page' onClick={ () => navigate('/favorite-districts') }>Favorites</button>
                <button className='return-to-login-page-button' onClick={ () => navigate('/') }>Logout</button> 
            </div>
            </div>
        </div>
      )

    // a note about the buttons.  The buttons for routing home, favorites, etc will need to be conditionally rendered by the path of the url.  
    // Example: when on the favorites page we dont want a button that routes us to the favorites page since we are already on it
    // only want to show logout button if user is logged in.  Should be a "create account" button if they continue as guest
    // if() {
        return (
            <div className='nav-bar'>
                <div className='logo-and-buttons'>
                    <div className='logo'>
                        ReportCard ✅ 
                        {/* <h1>{}</h1> */}
                    </div>
                <div className='nav-button-container'>
                    <button className='go-to-favorites-page' onClick={ () => navigate('/favorite-districts') }>Favorites</button>
                    <button className='return-to-login-page-button' onClick={ () => navigate('/') }>Logout</button> 
                </div>
                </div>
            </div>
        )


    
    
    
    
}

export default NavBar;