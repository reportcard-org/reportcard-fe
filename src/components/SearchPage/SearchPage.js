import React, { useEffect } from 'react';
import './SearchPage.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import SearchForm from '../SearchForm/SearchForm';

const SearchPage = ({ searchForAddress, queryError }) => {
    const navigate = useNavigate()

    useEffect(()=> {
        queryError && navigate('/login')
    }, [ navigate, queryError])
        
        return (
            <div className='search-form-container'>
                <SearchForm
                    searchForAddress={searchForAddress}
                />
            </div>
        )
}

export default SearchPage;

SearchPage.propTypes = {
    searchForAddress: PropTypes.func.isRequired,
    queryError: PropTypes.object
}