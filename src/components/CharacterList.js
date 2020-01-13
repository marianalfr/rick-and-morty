import React from 'react';
import Character from './Character';

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

export default CharacterList;