import React from 'react';
import './FavoriteReportCard.scss';
import PropTypes from 'prop-types'

const FavoriteReportCard = ({ name, studentTeacherRatio, perTeacherSalaryExpenses, enrollment, numberOfSchoolsInDistrict, studentGuidanceCounselorRatio, perStudentExpenditure }) => {

    return (
        <div className='favorite-report-card'>
            <div className='district-name'>
                <h1>{name}</h1>
            </div>
            <div className='title-and-info-container'>
                <p className='info-title'>Student to Teacher Ratio: </p>
                <p className='card-bubble'>{studentTeacherRatio}</p>
            </div>
            <div className='title-and-info-container'>
                <p className='info-title'>Teacher salary: </p>
                <p className='card-bubble'>{perTeacherSalaryExpenses}</p>
            </div>
            <div className='title-and-info-container'>
                <p className='info-title'>Enrollment: </p>
                <p className='card-bubble'>{enrollment}</p>
            </div>
            <div className='title-and-info-container'>
                <p className='info-title'>Number of Schools: </p>
                <p className='card-bubble'>{numberOfSchoolsInDistrict}</p>
            </div>
            <div className='title-and-info-container'>
                <p className='info-title'>Guidance Counselor Ratio: </p>
                <p className='card-bubble'>{studentGuidanceCounselorRatio}</p>
            </div>
            <div className='title-and-info-container'>
                <p className='info-title'>Expenditure Per Student: </p>
                <p className='card-bubble'>{perStudentExpenditure}</p>
            </div>
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
