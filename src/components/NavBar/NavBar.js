import React from 'react';
import './NavBar.scss';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ signOut, data}) => {
    const navigate = useNavigate()
    
    if (data) {
        return(
            <div className='nav-bar'>
                <div className='logo-and-buttons'>
                    <button onClick={ () => navigate('/home') }className='logo'>
                        ReportCard ✅
                </button>
            <div className='nav-button-container'>
                <button className='go-to-favorites-page' onClick={ () => navigate('/favorite-districts')}>Favorites</button>
                <button className='return-to-login-page-button' onClick={ () => signOut() }>Logout</button>
                        <h3>{data.user.name}</h3>
            </div>
                </div>
            </div>
        )
    } else if (!data){
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