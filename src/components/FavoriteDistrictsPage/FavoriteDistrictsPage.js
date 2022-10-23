import React from 'react';
import './FavoriteDistrictsPage.scss';
// import PropTypes from 'prop-types'
import FavoriteReportCard from '../FavoritedReportCard/FavoriteReportCard';
import {  useNavigate } from 'react-router-dom';
// import { useAddFavorite } from '../../hooks/useAddFavorite';

const FavoriteDistrictsPage = ({currentDistrictData, userData}) => {
    const navigate = useNavigate()

    // let districtId = currentDistrictData.data.attributes[0].lea_id
    // let userId = userData.user.id
    // const { error, loading, data } = useAddFavorite(userId, districtId )

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