import React from 'react';
import './FavoriteDistrictsPage.scss';
// import PropTypes from 'prop-types'
import FavoriteReportCard from '../FavoritedReportCard/FavoriteReportCard';
import {  useNavigate } from 'react-router-dom';

const FavoriteDistrictsPage = ({ favData }) => {
    console.log('favData: ', favData)
    const navigate = useNavigate()

 
    return (
        <div className='favorites-container'>
            <FavoriteReportCard
                // data={data}
            />            
           <button className='search-page' onClick={ () => navigate('/home') }>Back to Search Page</button>
        </div>
    )
}

export default FavoriteDistrictsPage;

// FavoriteDistrictsPage.propTypes = {
//      favoritedDistricts: PropTypes.array
// } 