import React from 'react';
import ReportCard from '../ReportCard/ReportCard'
import './DistrictInfoPage.scss';
import PropTypes from 'prop-types'
import {v4 as uuidV4} from "uuid"
import {  useNavigate } from 'react-router-dom';

const DistrictInfoPage = ({ addFavorites, currentDistrictData, favData}) => {
    // console.log("didstrctinforpage",favData)
    // console.log(currentDistrictData)
    const navigate = useNavigate()
   
    const newReportCard = currentDistrictData.data.attributes.map(attribute => {
        return (
            <ReportCard 
                id = {currentDistrictData.lea_id}
                key = {uuidV4()}
                districtName={attribute.district_name}
                studentTeacherRatio = {attribute.student_teacher_ratio}
                perStudentExpenditure={attribute.per_student_expenditure}
                numberOfSchoolsInDistrict={attribute.number_of_schools_in_district}
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
    