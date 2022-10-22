import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const UserInfo = ({ userLoginEmail, signedOutUser }) => {
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
    

const signOut = () => {
    navigate('/login')
    signedOutUser()
}

if (data) {
  // navigate('/home')
    return (
        <div>
            <div className='nav-button-container'>
                <button className='go-to-favorites-page' onClick={() => navigate('/favorite-districts')}>Favorites</button>
                <button className='return-to-login-page-button' onClick={() => signOut()}>Logout</button>
                <h3>{data.user.name}</h3>
            </div>
        </div>
    )
} else if (!data) {
    return (
        <div className='nav-button-container'>
            <button className='return-to-login-page-button' onClick={() => navigate('/login')}>Sign in</button>
        </div>
    )
    } else {
        console.log('Loading')
    }

    return (
        <div>
            <p>A dog ate our homework. We need some more time to load this.</p>
        </div>
    );
    };

export default UserInfo;