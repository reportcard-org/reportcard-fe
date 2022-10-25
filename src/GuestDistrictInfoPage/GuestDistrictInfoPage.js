import React from 'react';
import ReportCard from '../components/ReportCard/ReportCard';
import './GuestDistrictInfoPage.scss';
import PropTypes from 'prop-types';
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from 'react-router-dom';

const GuestDistrictInfoPage = ({ currentDistrictData }) => {
    const navigate = useNavigate();

    const newReportCard = currentDistrictData.data.attributes.map(attribute => {
        return (
            <ReportCard
                key={uuidV4()}
                id={currentDistrictData.lea_id}
                districtName={attribute.district_name}
                studentTeacherRatio={attribute.student_teacher_ratio}
                instructionSalaryPercentOfTotal={attribute.instruction_salary_percentOfTotal}
                perTeacherSalaryExpenses={attribute.per_teacher_salary_expenses}
                enrollment={attribute.enrollment}
                numberOfSchoolsInDistrict={attribute.number_of_schools_in_district}
                studentGuidanceCounselorRatio={attribute.student_guidance_counselor_ratio}
                perStudentExpenditure={attribute.per_student_expenditure}
            />
        )
    })

    return (
        <div className='district-info-container'>
            <p><button className='back-to-search' onClick={() => navigate('/home')}>Back to Search</button></p>
            {newReportCard}
            <p><button className='add-district-to-favorites' onClick={() => navigate('/login')}>Sign in to Save</button></p>
        </div>
    )
}

export default GuestDistrictInfoPage;

GuestDistrictInfoPage.propTypes = {
    districtData: PropTypes.object
}




















