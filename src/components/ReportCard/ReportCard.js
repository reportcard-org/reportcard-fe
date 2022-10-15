import React from 'react';
import './ReportCard.css';

const ReportCard = ({ studentTeacherRatio, perStudentExpenditure, teacherSalaryInfo, studentPopulationSize,          numberOfSchoolsInDistrict }) => {
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