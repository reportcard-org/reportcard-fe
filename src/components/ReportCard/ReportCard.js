import React from 'react';
import './ReportCard.scss';
import PropTypes from 'prop-types'

const ReportCard = ({ districtName, studentTeacherRatio, perTeacherSalaryExpenses, instructionSalaryPercentOfTotal, enrollment, numberOfSchoolsInDistrict, studentGuidanceCounselorRatio, perStudentExpenditure }) => {

    return (
        <div className='report-card'>
                <p className='district-name'>{districtName}</p>
            <div className='title-and-info-container'>
                <div className='title-and-info'>
                    <p className='info-title'>Student to Teacher Ratio: </p>
                    <p className='card-bubble'>{studentTeacherRatio ? studentTeacherRatio + '%' : 'Not Available'}</p>
                </div>
                <div className='title-and-info'>
                    <p className='info-title'>Teacher salary: </p>
                    <p className='card-bubble'>{perTeacherSalaryExpenses ? '$' + perTeacherSalaryExpenses.toLocaleString('en-US') : 'Not Available'}</p>
                </div>
                <div className='title-and-info'>
                    <p className='info-title'>Instruction Salary % of Total: </p>
                    <p className='card-bubble'>{instructionSalaryPercentOfTotal ? instructionSalaryPercentOfTotal + '%' : 'Not Available'}</p>
                </div>
                <div className='title-and-info'>
                    <p className='info-title'>Enrollment: </p>
                    <p className='card-bubble'>{enrollment ? enrollment.toLocaleString('en-US') : 'Not Available'}</p>
                </div>
                <div className='title-and-info'>
                    <p className='info-title'>Number of Schools: </p>
                    <p className='card-bubble'>{numberOfSchoolsInDistrict ? numberOfSchoolsInDistrict : 'Not Available'}</p>
                </div>
                <div className='title-and-info'>
                    <p className='info-title'>Guidance Counselor Ratio: </p>
                    <p className='card-bubble'>{studentGuidanceCounselorRatio ? studentGuidanceCounselorRatio.toLocaleString('en-US') + '%' : 'Not Available'}</p>
                </div>
                <div className='title-and-info'>
                    <p className='info-title'>Expenditure Per Student: </p>
                    <p className='card-bubble'>{perStudentExpenditure ? '$' + perStudentExpenditure.toLocaleString('en-US') : 'Not Available'}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportCard;

ReportCard.propTypes = {
    districtName: PropTypes.string,
    studentTeacherRatio: PropTypes.number,
    perTeacherSalaryExpenses: PropTypes.number,
    instructionSalaryPercentOfTotal: PropTypes.number,
    enrollment: PropTypes.number,
    numberOfSchoolsInDistrict: PropTypes.number,
    studentGuidanceCounselorRatio: PropTypes.number,
    perStudentExpenditure: PropTypes.number,
} 
