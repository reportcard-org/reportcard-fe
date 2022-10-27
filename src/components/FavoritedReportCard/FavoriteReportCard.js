import React from 'react';
import './FavoriteReportCard.scss';
import PropTypes from 'prop-types'

const FavoriteReportCard = ({ name, studentTeacherRatio, perTeacherSalaryExpenses, instructionSalaryPercentOfTotal, enrollment, numberOfSchoolsInDistrict, studentGuidanceCounselorRatio, perStudentExpenditure }) => {

    return (
        <div className='fav-report-card'>
                <p>{name}</p>
            <div className='fav-title-and-info-container'>
                <p className='fav-info-title'>Student to Teacher Ratio: </p>
                <p className='fav-card-bubble'>{studentTeacherRatio}</p>
            </div>
            <div className='fav-title-and-info-container'>
                <p className='fav-info-title'>Teacher salary: </p>
                <p className='fav-card-bubble'>{perTeacherSalaryExpenses}</p>
            </div>
            <div className='fav-title-and-info-container'>
                <p className='fav-info-title'>Instruction Salary Percentage of Total: </p>
                <p className='fav-card-bubble'>{instructionSalaryPercentOfTotal}</p>
            </div>
            <div className='fav-title-and-info-container'>
                <p className='fav-info-title'>Enrollment: </p>
                <p className='fav-card-bubble'>{enrollment}</p>
            </div>
            <div className='fav-title-and-info-container'>
                <p className='fav-info-title'>Number of Schools: </p>
                <p className='fav-card-bubble'>{numberOfSchoolsInDistrict}</p>
            </div>
            <div className='fav-title-and-info-container'>
                <p className='fav-info-title'>Guidance Counselor Ratio: </p>
                <p className='fav-card-bubble'>{studentGuidanceCounselorRatio}</p>
            </div>
            <div className='fav-title-and-info-container'>
                <p className='fav-info-title'>Expenditure Per Student: </p>
                <p className='fav-card-bubble'>{perStudentExpenditure}</p>
            </div>
            <h1>❤️</h1>
        </div>
    )
}

export default FavoriteReportCard;

FavoriteReportCard.propTypes = {
    name: PropTypes.string,
    studentTeacherRatio: PropTypes.number,
    perTeacherSalaryExpenses: PropTypes.number,
    instructionSalaryPercentOfTotal: PropTypes.number,
    enrollment: PropTypes.number,
    numberOfSchoolsInDistrict: PropTypes.number,
    studentGuidanceCounselorRatio: PropTypes.number,
    perStudentExpenditure: PropTypes.number,
} 
