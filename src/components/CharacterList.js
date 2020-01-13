import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return(
        <ul className = "character-list">
            {props.characters.map(character => 
                <Character character = {character}/>
            )}
        </ul>
    );
};

export default CharacterList;