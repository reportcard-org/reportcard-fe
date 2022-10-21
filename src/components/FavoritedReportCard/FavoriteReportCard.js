import React from 'react';
// import './FavoriteReportCard.scss';
import PropTypes from 'prop-types'

//pass in function to delete a favorited report card

const FavoriteReportCard = ({ studentTeacherRatio, perStudentExpenditure, teacherSalaryInfo, studentPopulationSize, numberOfSchoolsInDistrict }) => {
    return (
        <div className='report-card'>
            {studentTeacherRatio}
            {perStudentExpenditure}
            {teacherSalaryInfo}
            {studentPopulationSize}
            {numberOfSchoolsInDistrict}

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
