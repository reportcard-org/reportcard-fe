import React from 'react';
import ReportCard from '../ReportCard/ReportCard'
import './DistrictInfoPage.scss';
import PropTypes from 'prop-types'
import {v4 as uuidV4} from "uuid"
import {  useNavigate } from 'react-router-dom';
import { useAddFavorite } from '../../hooks/useAddFavorite';

const DistrictInfoPage = ({ addFavorites, currentDistrictData, userData }) => {
    const navigate = useNavigate()
   
    const newReportCard = currentDistrictData.data.attributes.map(attribute => {
        return (
            <ReportCard 
                id = {currentDistrictData.lea_id}
                key = {uuidV4()}
                studentTeacherRatio = {attribute.student_teacher_ratio}
                perStudentExpenditure={attribute.per_student_expenditure}
                numberOfSchoolsInDistrict={attribute.number_of_schools_in_district}
                latitude = {attribute.latitude}
                longitude = {attribute.longitude}
            />
        )
    })
    
    return (
        <div className='district-info-container'>
            <p><button className='back-to-search' onClick={ () => navigate('/home') }>Back to Search</button></p>
            {newReportCard}
            <p><button className='add-district-to-favorites' onClick={() => addFavorites() 
}>Add to Favorites!</button></p>
        </div>
    )
}

export default DistrictInfoPage;

DistrictInfoPage.propTypes = {
        districtData: PropTypes.object
} 
    