import React from 'react';
import './NavBar.scss';
import {  useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';


const NavBar = ({userLoginEmail, signedInUser}) => {
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
                         <div className='logo'>
                            ReportCard ✅
                        </div>
                    <div className='nav-button-container'>
                        <button className='go-to-favorites-page' onClick={ () => navigate('/favorite-districts') }>Favorites</button>
                        <button className='return-to-login-page-button' onClick={ () => navigate('/') }>Logout</button>
                        <h3>{data.user.name}</h3>
                    </div>
                        </div>
                    </div>
                )} else if(!data){
                    return(
                        <div className='nav-bar'>
                        <div className='logo-and-buttons'>
                         <div className='logo'>
                            ReportCard ✅
                         </div>
                         <div className='nav-button-container'>
                         <button className='return-to-login-page-button' onClick={ () => navigate('/') }>Sign in</button>
                         </div>
                        </div>
                    </div>
                    )
                } else {

                    return(
                     <div className='nav-bar'>
                        <div className='logo-and-buttons'>
                         <div className='logo'>
                            ReportCard ✅
                         </div>
                         <div className='nav-button-container'>
                         </div>
                        </div>
                    </div>
                    )
                }
}
export default NavBar;