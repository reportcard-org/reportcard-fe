import React, { useState, useEffect, useCallback } from 'react';
import ReportCard from '../ReportCard/ReportCard'
import './DistrictInfoPage.scss';
import PropTypes from 'prop-types'
import { v4 as uuidV4 } from "uuid"
import { useNavigate } from 'react-router-dom';

const DistrictInfoPage = ({ addFavorites, currentDistrictData, favData, userId, districtId }) => {
    const [ alreadySaved, setAlreadySaved ] = useState(false)
    const navigate = useNavigate()

    const checkIfSaved = useCallback(
        (currentDistrictData, favData) => {
            let currentDistrictName;
            currentDistrictName = currentDistrictData?.data.attributes.map(attribute => {
                return attribute.district_name
            })
            return (
                favData.userdistricts.some(district => {
                    return district.district.name === currentDistrictName[ 0 ]
                })
            );
        }, []);

    useEffect(() => {
        setAlreadySaved(checkIfSaved(currentDistrictData, favData))
    }, [ checkIfSaved, currentDistrictData, favData ])

    const newReportCard = currentDistrictData.data.attributes.map(attribute => {
        return (
            <ReportCard
                key={uuidV4()}
                id={currentDistrictData.lea_id}
                districtName={attribute.district_name}
                studentTeacherRatio={attribute.student_teacher_ratio}
                instructionSalaryPercentOfTotal={attribute.instruction_salary_percent_of_total}
                perTeacherSalaryExpenses={attribute.per_teacher_salary_expenses}
                enrollment={attribute.enrollment}
                numberOfSchoolsInDistrict={attribute.number_of_schools_in_district}
                studentGuidanceCounselorRatio={attribute.student_guidance_counselor_ratio}
                perStudentExpenditure={attribute.per_student_expenditure}
            />
        )
    })



    if (alreadySaved && userId) {
        return (
            <div className='district-info-container'>
                <p><button className='back-to-search' onClick={() => navigate('/home')}>Back to Search</button></p>
                {newReportCard}
                <h1 className='add-district-to-favorites'>❤️ Already saved to faves ❤️</h1>
            </div>
        )
    } else if (!alreadySaved && userId) {
        return (
            <div className='district-info-container'>
                <p><button className='back-to-search' onClick={() => navigate('/home')}>Back to Search</button></p>
                {newReportCard}
                <p><button className='add-district-to-favorites' onClick={() => addFavorites({ variables: { userId: Number(userId), districtId: Number(districtId?.charAt(1) === "0" ? districtId.substring(1) : districtId) } })}>Add to Favorites!</button></p>
            </div>
        )
    }
}

export default DistrictInfoPage;

DistrictInfoPage.propTypes = {
    districtData: PropTypes.object
}
