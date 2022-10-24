import React from 'react';
import './FavoriteDistrictsPage.scss';
// import PropTypes from 'prop-types'
import FavoriteReportCard from '../FavoritedReportCard/FavoriteReportCard';
import {  useNavigate } from 'react-router-dom';
import {v4 as uuidV4} from "uuid"


const FavoriteDistrictsPage = ({ favData}) => {
    // console.log('favData: ', favData)
    const navigate = useNavigate()

    const favReportCard = favData.userdistricts.map(district => {
        // console.log(district.district.name)
        return (
            <>
            <FavoriteReportCard
            id = {district.district.leaId}
            key={uuidV4()}
            name={district.district.name}
            studentTeacherRatio={district.district.studentTeacherRatio}
            instructionSalaryPercentOfTotal={district.district.instructionSalaryPercentOfTotal}
            perTeacherSalaryExpenses={district.district.perTeacherSalaryExpenses}
            enrollment={district.district.enrollment}
            numberOfSchoolsInDistrict={district.district.numberOfSchoolsInDistrict}
            studentGuidanceCounselorRatio={district.district.studentGuidanceCounselorRatio}
            perStudentExpenditure={district.district.perStudentExpenditure}
            />            
            <h1>❤️</h1>
            </>
        )
    })

    return (
        <div className='favorites-container'>
           <button className='search-page' onClick={ () => navigate('/home') }>Back to Search Page</button>
            {favReportCard}
        </div>
    )
}

export default FavoriteDistrictsPage;

// FavoriteDistrictsPage.propTypes = {
//      favoritedDistricts: PropTypes.array
// } 