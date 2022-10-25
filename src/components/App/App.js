import React, { useState } from 'react';
import './App.scss';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import { getDistrict } from '../../apiCalls';
import NavBar from '../NavBar/NavBar';
import SignInNavBar from '../SignInNavBar/SignInNavBar'
import GuestDistrictInfoPage from '../../GuestDistrictInfoPage/GuestDistrictInfoPage';
import Overview from '../Overview/Overview';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import { USER_FAV_QUERY } from '../../hooks/useGetFavorites';
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

  console.log(queryError, queryLoading)

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
  }

  const { favError, favLoading, favData } = useGetFavorites(userId)

  console.log(favError, favLoading)

  const [addFavorites, { error, loading, data }] = useMutation(FAVORITE_DISTRICT, {
    refetchQueries: [
      { query: USER_FAV_QUERY },
      'userdistricts'
    ],
  })

  console.log("MUTATION", { data, loading, error })

  const submitLogin = (userEmail) => {
    setUserLoginEmail(userEmail)
  }

  const signOut = () => {
    navigate("/")
    setUserLoginEmail("")
  }

  const searchForAddress = (newAddressQuery) => {
    getDistrict(newAddressQuery)
      .then(result => {
        setDistrictData(result)
        userId ? navigate('/district-info') : navigate('/district-info-guest')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <>
            <SignInNavBar
            />
            <Overview />
          </>
        } />
        <Route path='/login' element={
          <>
            <SignInNavBar
            />
            <UserLoginPage submitLogin={submitLogin} />
          </>
        } />
        <Route path='/home' element={
          <>
            <NavBar
              signOut={signOut}
              data={queryData}
            />
            <SearchPage
              searchForAddress={searchForAddress}
            />
          </>
        }
        />
        <Route path='/district-info' element={
          <>
            <NavBar
              signOut={signOut}
              data={queryData}
            />
            < DistrictInfoPage
              currentDistrictData={districtData}
              addFavorites={addFavorites}
              favData={favData}
              userId={userId}
              districtId={districtId}
            />
          </>
        } />
        <Route path='/district-info-guest' element={
          <>
            <NavBar
              signOut={signOut}
              data={queryData}
            />
            < GuestDistrictInfoPage
              currentDistrictData={districtData}
            />
          </>
        } />
        <Route path='/favorite-districts' element={
          <>
            <NavBar
              signOut={signOut}
              data={queryData}
            />
            <FavoriteDistrictsPage
              favData={favData}
            />
          </>
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