import React from 'react';

const Search = props => {

    const getSearch = event => {
        const value = event.target.value;
        props.getSearch(value);
    }

    return(
        <form>
            <label htmlFor="search">Character search:</label>
            <input type="text" id="search" value={props.value} onChange={getSearch}/>
        </form>
    );
};

export default Search;