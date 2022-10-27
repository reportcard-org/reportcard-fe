import React from 'react';
import './FavNavBar.scss';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const FavNavBar = ({ signOut }) => {
    const navigate = useNavigate()

    return (
        <div className='fav-nav-bar'>
            <div className='fav-logo-and-buttons'>
                <button onClick={() => navigate('/home')} className='fav-logo'>
                    ReportCard ✅
                </button>
                <div className='fav-nav-button-container'>
                    <button className='search-page' onClick={() => navigate('/home')}>Back to Search Page</button>
                    <button className='return-to-login-page-button' onClick={() => signOut()}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default FavNavBar;

FavNavBar.propTypes = {
    signOut: PropTypes.func,
}