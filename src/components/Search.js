import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {

    const getSearch = event => {
        const value = event.target.value;
        props.getSearch(value);
    }

    return(
        <form className="search-form">
            <label className="search-form__label" htmlFor="search">Character search:</label>
            <input className="search-form__search" type="text" id="search" placeholder="Annie" value={props.search} onChange={getSearch}/>
        </form>
    );
};

Search.propTypes = {
    search: PropTypes.string
};

export default Search;