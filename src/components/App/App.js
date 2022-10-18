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

  const searchForAddress = (newAddressQuery) => {
    //this is where we will send information to the back.  I've only ever made searched with API calls and not GraphQl so am curious if this is a wuery or mutation?  or if we use an api call?  
    navigate('/district-info')
    getDistrict(newAddressQuery)
  }

  const getDistrict = (addressObject) => {
    console.log('ADDRESS OBJECT', addressObject)
    fetch(`https://reportcard-rails.herokuapp.com/api/v1/district_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addressObject)
    })
    .then(response => 
    // { console.log(response.json())
    response.json() )
    .then(result => 
      { console.log('RESULT', result) 
      setDistrictData(result) })
  }
  
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path='/' element={
          <UserLoginPage />
        } />

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
            <button className='search-page' onClick={() => navigate('/home')} >Back to Search Page</button>
          </div>
        } />

      </Routes>
    </div>
  );
}

export default App;