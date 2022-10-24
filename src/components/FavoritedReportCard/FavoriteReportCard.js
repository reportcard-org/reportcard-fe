import React from 'react';
import './FavoriteReportCard.scss';
import PropTypes from 'prop-types'

//pass in function to delete a favorited report card

const FavoriteReportCard = ({name, studentTeacherRatio, instructionSalaryPercentOfTotal, perTeacherSalaryExpenses, enrollment, numberOfSchoolsInDistrict, studentGuidanceCounselorRatio, perStudentExpenditure}) => {
    // const { studentTeacherRatio, perStudentExpenditure, teacherSalaryInfo, studentPopulationSize, numberOfSchoolsInDistrict } = data
   
    return (
        <div className='report-card'>
            <h1>{name}</h1>
        <p className='card-bubble'>Student to teacher {studentTeacherRatio}</p>
        <p className='card-bubble'> {instructionSalaryPercentOfTotal}</p>
        <p className='card-bubble'>Teacher salary{perTeacherSalaryExpenses}</p>
        <p className='card-bubble'>Enrollment{enrollment}</p>
        <p className='card-bubble'># of Schools in District{numberOfSchoolsInDistrict}</p>
        <p className='card-bubble'>Guidance counselor ratio{studentGuidanceCounselorRatio}</p>
        <p className='card-bubble'>$ per student{perStudentExpenditure}</p>
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
