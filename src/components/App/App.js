import React, { useState } from 'react';
import './App.scss';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import NavBar from '../NavBar/NavBar';
import Overview from '../Overview/Overview';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import FavoriteDistrictsPage from '../FavoriteDistrictsPage/FavoriteDistrictsPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useGetUsers } from '../../hooks/useGetUsers';

const App = () => {
  const navigate = useNavigate()
  const [districtData, setDistrictData] = useState({})
  const [userLoginEmail, setUserLoginEmail] = useState("")
  const {error, loading, data } = useGetUsers(userLoginEmail)

  const submitLogin = (userEmail) => {
    setUserLoginEmail(userEmail)
  }

  const signOut = () => {
    navigate("/")
    setUserLoginEmail("")
  }

  const searchForAddress = (newAddressQuery) => {
    getDistrict(newAddressQuery)
  }

  const getDistrict = (addressObject) => {
    return fetch(`https://reportcard-rails.herokuapp.com/api/v1/district_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addressObject)
    })
    .then(response => response.json())
    .then(result => {
      setDistrictData(result)
      navigate('/district-info')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <NavBar
      signOut={signOut}
      data={data}
      />
      <Routes>
        <Route exact path='/' element={
          <Overview />
        } />
        <Route path='/login' element={
        <UserLoginPage submitLogin={submitLogin} />
        } />
        <Route path='/home' element={
          <SearchPage searchForAddress={searchForAddress} />
        }
        />
        <Route path='/district-info' element={
          <DistrictInfoPage districtData={districtData} />
        } />
        <Route path='/favorite-districts' element={
          <FavoriteDistrictsPage
          userData={data}
          currentDistrictData={districtData}
          />
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
