import React from 'react';
import './FavoriteReportCard.scss';
import PropTypes from 'prop-types'

//pass in function to delete a favorited report card

const FavoriteReportCard = (data) => {
    const { studentTeacherRatio, perStudentExpenditure, teacherSalaryInfo, studentPopulationSize, numberOfSchoolsInDistrict } = data
   
    return (
        <div className='report-card'>
        <p className='card-bubble'>{studentTeacherRatio}</p>
        <p className='card-bubble'>{perStudentExpenditure}</p>
        <p className='card-bubble'>{numberOfSchoolsInDistrict}</p>
    </div>
    )
}

export default FavoriteReportCard;

FavoriteReportCard.propTypes = {
    studentTeacherRatio: PropTypes.number,
    perStudentExpenditure: PropTypes.number,
    teacherSalaryInfo: PropTypes.number,
    studentPopulationSize: PropTypes.number,
    numberOfSchoolsInDistrict: PropTypes.number
    //function to delete will be a proptype of function
} 
