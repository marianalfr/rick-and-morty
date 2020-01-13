import React from 'react';

const CharacterDetails = props => {
    if(props.character === undefined){
        return(
            <p>Loading...</p>
        )
    } else {
        return (
            <div className="character-details">
                <img src={props.character.image}/>
                <h3>{props.character.name}</h3>
                <ul className="detail-list">
                    <li>Status: {props.character.status}</li>
                    <li>Species: {props.character.species}</li>
                    <li>Origin: {props.character.origin.name}</li>
                    <li>Episodes: {props.character.episode.length}</li>
                </ul>
            </div>
        );
    }
};

export default CharacterDetails;

