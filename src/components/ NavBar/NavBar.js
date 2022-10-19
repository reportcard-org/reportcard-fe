import React from 'react';
import './NavBar.scss';
import {  useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate()
    // a note about the buttons.  The buttons for routing home, favorites, etc will need to be conditionally rendered by the path of the url.  
    // Example: when on the favorites page we dont want a button that routes us to the favorites page since we are already on it

    return (
        <div className='nav-bar'>
            <div className='logo'>
            ReportCard
            </div>
            <div className='nav-button-container'>
                <button className='search-page' onClick={ () => navigate('/home') }>Search Page</button>
                <button className='favorite-page' onClick={ () => navigate('/favorite-districts') }>Favorites</button>
                <button className='search-page' onClick={ () => navigate('/') }>Logout</button> 
            </div>
        </div>
    )
}

export default NavBar;