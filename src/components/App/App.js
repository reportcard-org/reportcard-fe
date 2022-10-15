import React, { useState } from 'react';
import './App.css';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import FavoriteDistrictsPage from '../FavoriteDistrictsPage/FavoriteDistrictsPage';

const App = () => {

  const [districtData, setDistrictData] = useState(
    {
    data: {
      id: 1,
      type: 'school district',
      attributes: [
        {student_teacher_ratio: .05},
        {per_student_expenditure: 2000},
        {teacher_salary_info: 60000},
        {student_population_size: 50000},
        {number_of_schools_in_district: 138}
      ]
    }
  });
  const [userData, setUserData] = useState('');

  return (
    <div className="App">
      <UserLoginPage /> 
      <SearchPage /> 
      <DistrictInfoPage districtData={districtData} /> 
      <FavoriteDistrictsPage /> 
    </div>
  );
}

export default App;
