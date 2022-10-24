import React, { useState, useEffect } from 'react';
import ReportCard from '../ReportCard/ReportCard'
import './DistrictInfoPage.scss';
import PropTypes from 'prop-types'
import { v4 as uuidV4 } from "uuid"
import { useNavigate } from 'react-router-dom';

const DistrictInfoPage = ({ addFavorites, currentDistrictData, favData }) => {
    // console.log("SAVED", alreadySaved)
    const [ alreadySaved, setAlreadySaved ] = useState(false)
    const navigate = useNavigate()

    let currentDistrictName;

    useEffect(() => {
        setAlreadySaved(checkIfSaved(currentDistrictData, favData))




    }, [ currentDistrictData, favData ])

    const checkIfSaved = (currentDistrictData, favData) => {

        // console.log(favData.userdistricts)

        currentDistrictName = currentDistrictData?.data.attributes.map(attribute => {
            return attribute.district_name
        })

        return !!favData?.userdistricts.find(district => {

            return district.district.name === currentDistrictName[ 0 ]
        })
    }

    console.log(alreadySaved)

    const newReportCard = currentDistrictData.data.attributes.map(attribute => {
        return (
            <ReportCard
                id={currentDistrictData.lea_id}
                key={uuidV4()}
                districtName={attribute.district_name}
                studentTeacherRatio={attribute.student_teacher_ratio}
                perStudentExpenditure={attribute.per_student_expenditure}
                numberOfSchoolsInDistrict={attribute.number_of_schools_in_district}
            />
        )
    })


    if (alreadySaved) {
        return (
            <div className='district-info-container'>
                <p><button className='back-to-search' onClick={() => navigate('/home')}>Back to Search</button></p>
                {newReportCard}
                <h1 className='add-district-to-favorites'>❤️ Already saved to faves ❤️</h1>
            </div>
        )

    } else {
        return (
            <div className='district-info-container'>
                <p><button className='back-to-search' onClick={() => navigate('/home')}>Back to Search</button></p>
                {newReportCard}
                <p><button className='add-district-to-favorites' onClick={() => addFavorites()
                }>Add to Favorites!</button></p>
            </div>
        )

    }





}

export default DistrictInfoPage;

DistrictInfoPage.propTypes = {
    districtData: PropTypes.object
}
