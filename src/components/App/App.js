import React, { useState } from 'react';
import './App.scss';
import DistrictInfoPage from '../DistrictInfoPage/DistrictInfoPage';
import NavBar from '../NavBar/NavBar';
import SignInNavBar from '../SignInNavBar/SignInNavBar'
import FavNavBar from '../FavNavBar/FavNavBar';
import GuestDistrictInfoPage from '../GuestDistrictInfoPage/GuestDistrictInfoPage';
import Overview from '../Overview/Overview';
import SearchPage from '../SearchPage/SearchPage';
import UserLoginPage from '../UserLoginPage/UserLoginPage';
import FavoriteDistrictsPage from '../FavoriteDistrictsPage/FavoriteDistrictsPage';
import { getDistrict } from '../../apiCalls';
import { USER_FAV_QUERY } from '../../hooks/useGetFavorites';
import { USER_LOGIN_QUERY } from '../../hooks/useGetUsers';
import { useGetFavorites } from '../../hooks/useGetFavorites';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useLazyQuery, useMutation, gql } from "@apollo/client";

const App = () => {
  const navigate = useNavigate()
  const [ districtData, setDistrictData ] = useState({})
  const [ error, setError ] = useState(false)
  const [ findUser, { error: queryError, loading: queryLoading, data: queryData } ] = useLazyQuery(USER_LOGIN_QUERY)

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
    districtId = districtData?.data?.attributes?.[ 0 ].lea_id
    userId = queryData?.user?.id
  }

  const { favLoading, favData } = useGetFavorites(userId)
  const [ addFavorites, { loading } ] = useMutation(FAVORITE_DISTRICT, {
    refetchQueries: [
      { query: USER_FAV_QUERY },
      'userdistricts'
    ],
  })

  const submitLogin = (userEmail) => {
    findUser({ variables: { email: userEmail } })
  }

  const signOut = () => {
    navigate("/")
    window.location.reload(false)
  }

  const searchForAddress = (newAddressQuery) => {
    getDistrict(newAddressQuery)
      .then(result => {
        setDistrictData(result)
        userId ? navigate('/district-info') : navigate('/district-info-guest')
        setError(false)
      })
      .catch((error) =>  {
        setError(true)
      });
  }

  if (queryLoading) return <h1>Loading...</h1>
  if (loading) return <h1>Loading...</h1>
  if (favLoading) return <h1>Loading...</h1>

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
            <UserLoginPage
              submitLogin={submitLogin}
              queryError={queryError}
            />
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
              queryError={queryError}
            />
            {error && <p>Could not find address.  Try again</p>}
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
            <FavNavBar
              signOut={signOut}

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