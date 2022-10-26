import React from 'react';
import './FavoriteDistrictsPage.scss';
// import PropTypes from 'prop-types'
import FavoriteReportCard from '../FavoritedReportCard/FavoriteReportCard';
import { v4 as uuidV4 } from "uuid"

const FavoriteDistrictsPage = ({ favData }) => {

    const favReportCard = favData.userdistricts.map(district => {
        return (
            <>
                <FavoriteReportCard
                    key={uuidV4()}
                    id={district.district.leaId}
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
            {favReportCard}
        </div>
    )
}

export default FavoriteDistrictsPage;

// FavoriteDistrictsPage.propTypes = {
//      favoritedDistricts: PropTypes.array
// } 