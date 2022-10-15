import React from 'react';
import ReportCard from '../ReportCard/ReportCard'
import './DistrictInfoPage.css';

const DistrictInfoPage = ( {districtData} ) => {

    const newReportCard = districtData.data.attributes.map(attribute => {
        return (
            <ReportCard 
                studentTeacherRatio = {attribute.student_teacher_ratio}
                perStudentExpenditure={attribute.per_student_expenditure}
                teacherSalaryInfo={attribute.teacher_salary_info}
                studentPopulationSize={attribute.student_population_size}
                numberOfSchoolsInDistrict={attribute.number_of_schools_in_district}
            />
        )
    })
    
    return (
        <div className='district-info-container'>
            {newReportCard}
        </div>
    )
}

export default DistrictInfoPage;