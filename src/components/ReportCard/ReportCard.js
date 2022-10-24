import React from 'react';
import './ReportCard.scss';
import PropTypes from 'prop-types'

const ReportCard = ({ studentTeacherRatio, perStudentExpenditure, teacherSalaryInfo, studentPopulationSize, numberOfSchoolsInDistrict, latitude, longitude }) => {
    return (
        <><div className='static-map'>
            <img src={"https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=12&size=500x200&key=AIzaSyCkbJZiAk9sMard7a7lAnVtS8u0PoyQaiY"}></img>
        </div>
        <div className='report-card'>
            <p className='card-bubble'>{studentTeacherRatio}</p>
            <p className='card-bubble'>{perStudentExpenditure}</p>
            <p className='card-bubble'>{numberOfSchoolsInDistrict}</p>
        </div></>
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
