import React, { useState, useEffect } from 'react';
import './App.scss';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import NavBar from '../ NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import FavoriteDistrictsPage from '../FavoriteDistrictsPage/FavoriteDistrictsPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import { useQuery, gql } from '@apollo/client';

const App = () => {
  const navigate = useNavigate()
  const [districtData, setDistrictData] = useState({})
  const [userLoginEmail, setUserLoginEmail] = useState("")
  const [userID, setUserID] = useState("")

  const submitLogin = (userEmail) => {
    setUserLoginEmail(userEmail)

    // data && console.log(data)
    //the 'userCredentials' needs to then update the USER_LOGIN_QUERY user(argument for id or email or whatver we end up doing) 
    // then if error invite user to log in as guest
    // if loading show loading
    //if data exists navigate to the search page.  show user name in nav bar, show favorites button in nav bar
    // setUserName(userCredentials)

  }

  const signedInUser = (id) => {
    setUserID(id)
  }

  const searchForAddress = (newAddressQuery) => {
    getDistrict(newAddressQuery)
  }

  const getDistrict = (addressObject) => {
    // console.log('ADDRESS OBJECT', addressObject)
    return fetch(`https://reportcard-rails.herokuapp.com/api/v1/district_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addressObject)
    })

    .then(response => response.json())
    .then(result => {
      // console.log('RESULT', result)
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
      signedInUser={signedInUser}
      userLoginEmail={userLoginEmail}
      />

      <Routes>
        <Route exact path='/' element={
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
          userID={userID}
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