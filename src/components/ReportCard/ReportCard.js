import React from 'react';
import './ReportCard.scss';
import PropTypes from 'prop-types'

const ReportCard = ({ districtName, studentTeacherRatio, perTeacherSalaryExpenses, instructionSalaryPercentOfTotal, enrollment, numberOfSchoolsInDistrict, studentGuidanceCounselorRatio, perStudentExpenditure }) => {
    return (
        <div className='report-card'>
            <h1>{districtName}</h1>
            <div className='title-and-info-container'> 
            <div className='title-and-info'>
                <p className='info-title'>Student to Teacher Ratio: </p>
                <p className='card-bubble'>{studentTeacherRatio}</p>
            </div>
            <div className='title-and-info'>
                <p className='info-title'>Teacher salary: </p>
                <p className='card-bubble'>{perTeacherSalaryExpenses}</p>
            </div>
            <div className='title-and-info'>
                <p className='info-title'>Instruction Salary % of Total: </p>
                <p className='card-bubble'>{instructionSalaryPercentOfTotal}</p>
            </div>
            <div className='title-and-info'>
                <p className='info-title'>Enrollment: </p>
                <p className='card-bubble'>{enrollment}</p>
            </div>
            <div className='title-and-info'>
                <p className='info-title'>Number of Schools: </p>
                <p className='card-bubble'>{numberOfSchoolsInDistrict}</p>
            </div>
            <div className='title-and-info'>
                <p className='info-title'>Guidance Counselor Ratio: </p>
                <p className='card-bubble'>{studentGuidanceCounselorRatio}</p>
            </div>
            <div className='title-and-info'>
                <p className='info-title'>Expenditure Per Student: </p>
                <p className='card-bubble'>{perStudentExpenditure}</p>
            </div>
            </div>
        </div>
    )
}

export default ReportCard;

ReportCard.propTypes = {
    studentTeacherRatio: PropTypes.number,
    perStudentExpenditure: PropTypes.number,
    teacherSalaryInfo: PropTypes.number,
    studentPopulationSize: PropTypes.number,
    numberOfSchoolsInDistrict: PropTypes.number
} 
