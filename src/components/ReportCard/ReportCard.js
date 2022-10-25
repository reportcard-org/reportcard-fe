import React from 'react';
import './ReportCard.scss';
import PropTypes from 'prop-types'

const ReportCard = ({ districtName, studentTeacherRatio, instructionSalaryPercentOfTotal, perTeacherSalaryExpenses, enrollment, numberOfSchoolsInDistrict, studentGuidanceCounselorRatio, perStudentExpenditure }) => {
    return (
        <div className='report-card'>
            <h1>{districtName}</h1>
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

export default ReportCard;

ReportCard.propTypes = {
    studentTeacherRatio: PropTypes.number,
    perStudentExpenditure: PropTypes.number,
    teacherSalaryInfo: PropTypes.number,
    studentPopulationSize: PropTypes.number,
    numberOfSchoolsInDistrict: PropTypes.number
} 
