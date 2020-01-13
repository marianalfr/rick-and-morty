import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const CharacterList = props => {
    return(
        <ul className = "character-list">
            {props.characters
            .filter(character => character.name.toLowerCase().includes(props.search.toLowerCase()))
            .map(character => 
                <Character character = {character}/>
            )}
        </ul>
    );
};

Character.propTypes = {
    characters: PropTypes.array
};

export default CharacterList;