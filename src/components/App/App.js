import React, { useState } from 'react';
import './App.css';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import NavBar from '../ NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import FavoriteDistrictsPage from '../FavoriteDistrictsPage/FavoriteDistrictsPage';
import { Routes, Route, useNavigate } from 'react-router-dom';


const App = () => {
  const navigate = useNavigate()

  //this will need a second param of setDistrictData once we get the form hooked up to search
 const [districtData, setDistrictData] = useState({})
  //   {
  //   data: {
  //     id: 1,
  //     type: 'school district',
  //     attributes: [
  //       {student_teacher_ratio: .05},
  //       {per_student_expenditure: 2000},
  //       {teacher_salary_info: 60000},
  //       {student_population_size: 50000},
  //       {number_of_schools_in_district: 138}
  //     ]
  //   }
  // });

 // const [userData, setUserData] = useState('');

  const searchForAddress = (newAddressQuery) => {
    //this is where we will send information to the back.  I've only ever made searched with API calls and not GraphQl so am curious if this is a wuery or mutation?  or if we use an api call?  
    navigate('/district-info')


    getDistrict(newAddressQuery)

      .then((data) => {setDistrictData(data)})

     
  //   .catch((error) => {
  //     setState({
  //         err: error + ". Bad data from server. Refresh or try again later",
  //     })
  // })

   

  }

  const getDistrict = (addressObject) => {
    fetch(`https://reportcard-rails.herokuapp.com/api/v1/district_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addressObject)
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(response.statusText);
      } else {
      console.log("response", response.json())

      return response.json()
      }
    }) 
  }

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path='/' element={
          <UserLoginPage /> 
        }/>  

        <Route path='/home' element={
          <SearchPage searchForAddress={searchForAddress} /> 
        }
        />
  
        <Route path='/district-info' element={
          <DistrictInfoPage districtData={districtData} /> 
        } />

        <Route path='/favorite-districts' element={
          <FavoriteDistrictsPage /> 
        } />

        <Route path='*' element={
          <div>
            <h1 className='not-found'>404: Not found</h1>
            <button className='search-page' onClick={ () => navigate('/home') } >Back to Search Page</button>
          </div>
        } />  

      </Routes>
    </div>
  );
}

export default App;