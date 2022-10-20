import React from 'react';
import './ReportCard.scss';
import PropTypes from 'prop-types'




const ReportCard = ({ studentTeacherRatio, perStudentExpenditure, teacherSalaryInfo, studentPopulationSize, numberOfSchoolsInDistrict }) => {
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

export default ReportCard;

ReportCard.propTypes = {
    studentTeacherRatio: PropTypes.number,
    perStudentExpenditure: PropTypes.number,
    teacherSalaryInfo: PropTypes.number,
    studentPopulationSize: PropTypes.number,
    numberOfSchoolsInDistrict: PropTypes.number
} 
