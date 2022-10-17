import React from 'react';
import './SearchPage.css';
import SearchForm from '../SearchForm/SearchForm';

const SearchPage = ({searchForAddress}) => {
    return (
        <div className='search-form-container'>
            <SearchForm searchForAddress={searchForAddress} />
        </div>
    )
}

export default SearchPage;