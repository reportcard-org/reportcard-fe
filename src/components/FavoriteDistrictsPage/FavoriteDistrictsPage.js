import React from 'react';
import './FavoriteDistrictsPage.css';
// import PropTypes from 'prop-types'
// import FavoriteReportCard from '../FavoritedReportCard/FavoriteReportCard';
import {  useNavigate } from 'react-router-dom';


const FavoriteDistrictsPage = () => {
    //will this need to hold state [] for the favorites or can we hold this in App?? 
    const navigate = useNavigate()

    return (
        <div className='favorites-container'>
            FavoriteDistrictsPage WILL EXIST HERE
            <button className='search-page' onClick={ () => navigate('/home') }>Back to Search Page</button>

        </div>
    )
}

export default FavoriteDistrictsPage;

// FavoriteDistrictsPage.propTypes = {
//      favoritedDistricts: PropTypes.array
// } 