import React from 'react';

const Search = props => {
    return(
        <form>
            <label for="search">Character search:</label>
            <input type="text" id="search" value={props.value}/>
        </form>
    );
};

export default Search;