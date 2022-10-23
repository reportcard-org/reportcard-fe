import React, { useState } from 'react';
import './App.scss';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import NavBar from '../NavBar/NavBar';
import Overview from '../Overview/Overview';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import FavoriteDistrictsPage from '../FavoriteDistrictsPage/FavoriteDistrictsPage';
import { useGetFavorites } from '../../hooks/useGetFavorites';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useGetUsers } from '../../hooks/useGetUsers';
import { useMutation, gql } from "@apollo/client";


const App = () => {
  const navigate = useNavigate()
  const [districtData, setDistrictData] = useState({})
  const [userLoginEmail, setUserLoginEmail] = useState("")
  const { queryError, queryLoading, queryData } = useGetUsers(userLoginEmail)
  
  // const { addFavorites, error, loading, data } = useAddFavorite(queryData, districtData)
  // console.log(addFavorites)

  const FAVORITE_DISTRICT = gql`
    mutation createUserDistrict($userId: Int!, $districtId: Int! ){
      createUserDistrict(input: {
        userId: $userId,
        districtId: $districtId
       }) {
        userdistrict {
            id
        }
      }
    }
`;

    
    let districtId;
    let userId;

    if (districtData && queryData) {
      districtId = districtData?.data?.attributes?.[0].lea_id
      userId = queryData?.user?.id
      console.log('districtId: ',  districtId)
      console.log('userId: ',  userId)
      console.log('districtData: ', districtData)
    }
    
  const { favError, favLoading, favData } = useGetFavorites(userId)

    const [addFavorites, { error, loading, data }] = useMutation(FAVORITE_DISTRICT, {
      variables: {
        userId: Number(userId),
        districtId: Number(districtId?.charAt(1) === "0" ? districtId.substring(1) : districtId)
      }
    })
    console.log('54 Data: ', data)


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
        data={queryData}
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
          < DistrictInfoPage 
            userData={queryData}
            currentDistrictData={districtData}
            addFavorites={addFavorites}
            />
        } />
        <Route path='/favorite-districts' element={
          <FavoriteDistrictsPage
            favData={favData}
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