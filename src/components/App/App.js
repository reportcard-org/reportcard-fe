import React, { useState } from 'react';
import './App.scss';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import NavBar from '../ NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import FavoriteDistrictsPage from '../FavoriteDistrictsPage/FavoriteDistrictsPage';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate()

  const [districtData, setDistrictData] = useState({})
  // const [userCredentials, setUserCredentials] = useState({})
  
  const submitLogin = (user) => {
    // setUserCredentials(user)
  }

  const searchForAddress = (newAddressQuery) => {
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

    .then(response => response.json())
    .then(result => {
      console.log('RESULT', result)
      setDistrictData(result)
      navigate('/district-info')
    })

  }
  
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path='/' element={
          <UserLoginPage submitLogin={submitLogin}/>
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