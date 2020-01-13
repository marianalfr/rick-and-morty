import React from 'react';
import Emoji from './Emoji';

const CharacterDetails = props => {
    if(props.character === undefined){
        return(
            <p>Loading...</p>
        )
    } else {
        return (
            <div className="character-details">
                <img src={props.character.image} alt={props.character.name}/>
                <h3>{props.character.name}</h3>
                <ul className="detail-list">
                    <li>Status: {props.character.status === 'Alive' ? <Emoji symbol="💚" label="alive"/> : <Emoji symbol="💀" label="dead"/>}</li>
                    <li>Species: {props.character.species === 'Alien' ? <Emoji symbol="👽" label="alien"/> : <Emoji symbol="👫" label="human"/>}</li>
                    <li>Origin: {props.character.origin.name}</li>
                    <li>Episodes: {props.character.episode.length}</li>
                </ul>
            </div>
        );
    }
};

export default CharacterDetails;

