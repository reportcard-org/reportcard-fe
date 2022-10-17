import React, { useState } from 'react';
import './App.css';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import FavoriteDistrictsPage from '../FavoriteDistrictsPage/FavoriteDistrictsPage';

const App = () => {

  //this will need a second param of setDistrictData once we get the form hooked up to search
 const [districtData] = useState(
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

 // const [userData, setUserData] = useState('');

  const searchForAddress = (newAddressQuery) => {
    //this is where we will send information to the back.  I've only ever made searched with API calls and not GraphQl so am curious if this is a wuery or mutation?  or if we use an api call?  

  }

  
  return (
    <div className="App">
      <UserLoginPage /> 

      <SearchPage searchForAddress={searchForAddress} /> 

      <DistrictInfoPage districtData={districtData} /> 

      <FavoriteDistrictsPage /> 
    </div>
  );
}

export default App;
