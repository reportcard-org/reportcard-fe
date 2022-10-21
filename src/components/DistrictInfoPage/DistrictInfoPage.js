import React from 'react';
import ReportCard from '../ReportCard/ReportCard'
// import './DistrictInfoPage.scss';
import PropTypes from 'prop-types'
import {v4 as uuidV4} from "uuid"
import {  useNavigate } from 'react-router-dom';
// import { useMutation, gql } from '@apollo/client';

// const FAVORITE_DISTRICT = gql`
//   mutation PostMutation(
//     $distictID: String!
//     $userID: String!
//   ) {
//     post(districtID: $districtID, userID: $userID) {
//       userID
//       districtID
//     }
//   }
// `;

const DistrictInfoPage = ({ districtData }) => {

    // const [favorites, setFavorites] = useState({
    //   districtID: '',
    //   userID: ''
    // });
    
    // const [createFavorite] = useMutation(FAVORITE_DISTRICT, {
    //   variables: {
    //       distictID: favorites.distictID,
    //       userID: favorites.userID
    //   }
    // })

    const navigate = useNavigate()

    // console.log('DISTRICT DATA', districtData)

    const newReportCard = districtData.data.attributes.map(attribute => {
        // console.log("attribute", attribute)
        return (
            <ReportCard 
                id = {districtData.lea_id}
                key = {uuidV4()}
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
            <p><button className='add-district-to-favorites' onClick={ () => navigate('/home') }>Add to Favorites!</button></p>
        </div>
    )
}

export default DistrictInfoPage;

DistrictInfoPage.propTypes = {
        districtData: PropTypes.object
} 
    