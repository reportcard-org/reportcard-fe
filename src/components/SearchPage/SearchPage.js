import React from 'react';
import './SearchPage.scss';
import PropTypes from 'prop-types'

import SearchForm from '../SearchForm/SearchForm';

const SearchPage = ({ searchForAddress }) => {
    return (
        <div className='search-form-container'>
            <SearchForm searchForAddress={searchForAddress} />
        </div>
    )
}

export default SearchPage;

SearchPage.propTypes = {
    searchForAddress: PropTypes.func
}