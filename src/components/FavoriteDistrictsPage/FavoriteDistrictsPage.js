import React from 'react';
import './FavoriteDistrictsPage.scss';
// import PropTypes from 'prop-types'
import FavoriteReportCard from '../FavoritedReportCard/FavoriteReportCard';
import {  useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';



const FavoriteDistrictsPage = ({currentDistrictID, currentUserID}) => {
    //will this need to hold state [] for the favorites or can we hold this in App?? 
    const navigate = useNavigate()


    const FAVORITE_DISTRICT = gql`
  mutation createUserDistrict($userId: Number!, $districtId: Number! ){
    createUserDistrict(input: {
        userId: $userId,
        districtID: $districtId
    }) {
        userdistrict {
            id
        }
    }
}
`;

const { error, loading, data } = useMutation(FAVORITE_DISTRICT, {
    variables: {
        userId: currentUserID,
        districtId: currentDistrictID
    }
  })




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