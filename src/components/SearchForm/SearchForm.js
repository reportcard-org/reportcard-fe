import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './SearchForm.scss';

const SearchForm = ({ searchForAddress }) => {

    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [stateAddress, setStateAddress] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const newAddressQuery = {
            city: city,
            street: street,
            state: stateAddress
        }
        searchForAddress(newAddressQuery)
        clearInputs()
    }

    const clearInputs = () => {
        setCity('');
        setStreet('');
        setStateAddress('');
    }

    return (
        <form className='search-form' method="post" onSubmit={(event) => handleSubmit(event)}>
            <input
                className='search-input-city'
                type='text'
                name='city'
                placeholder='City'
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <input
                className='search-input-street'
                type='text'
                name='street'
                placeholder='Street'
                value={street}
                onChange={(event) => setStreet(event.target.value)}
            />
            <input
                className='search-input-state-address'
                type='text'
                name='stateAddress'
                placeholder='State'
                value={stateAddress}
                onChange={(event) => setStateAddress(event.target.value)}
            />

            <button className='search-button' type='submit' disabled={!city || !street || !stateAddress}>Search</button>
        </form>
    );
}

export default SearchForm;

SearchForm.propTypes = {
    searchForAddress: PropTypes.func
}