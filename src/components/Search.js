import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {

    const getSearch = event => {
        const value = event.target.value;
        props.getSearch(value);
    }

    return(
        <form>
            <label htmlFor="search">Character search:</label>
            <input type="text" id="search" value={props.search} onChange={getSearch}/>
        </form>
    );
};

Search.propTypes = {
    search: PropTypes.string
};

export default Search;