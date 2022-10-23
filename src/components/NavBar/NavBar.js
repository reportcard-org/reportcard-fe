import React from 'react';
import './NavBar.scss';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const NavBar = ({userLoginEmail, signOut}) => {
    const navigate = useNavigate()

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
                return(
                    <div className='nav-bar'>
                        <div className='logo-and-buttons'>
                         <button onClick={ () => navigate('/home') }className='logo'>
                                ReportCard ✅
                        </button>
                    <div className='nav-button-container'>
                        <button className='go-to-favorites-page' onClick={ () => navigate('/favorite-districts') }>Favorites</button>
                        <button className='return-to-login-page-button' onClick={ () => signOut() }>Logout</button>
                        <h3>{data.user.name}</h3>
                    </div>
                        </div>
                    </div>
                )} else if(!data){
                    return(
                        <div className='nav-bar'>
                        <div className='logo-and-buttons'>
                         <button onClick={ () => navigate('/home') } className='logo'>
                                ReportCard ✅
                        </button>
                         <div className='nav-button-container'>
                         <button className='return-to-login-page-button' onClick={ () => navigate('/login') }>Sign in</button>
                         </div>
                        </div>
                    </div>
                    )
                } else {

                    return(
                     <div className='nav-bar'>
                        <div className='logo-and-buttons'>
                        <button onClick={ () => navigate('/home') }className='logo'>
                                ReportCard ✅
                        </button>
                         <div className='nav-button-container'>
                         </div>
                        </div>
                    </div>
                    )
                }
}
export default NavBar;