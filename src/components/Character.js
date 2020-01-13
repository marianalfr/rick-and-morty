import React from 'react';

const Character = props => {
    return(
        <li key={props.character.id}>
            <img src={props.character.image}/>
            <h3>{props.character.name}</h3>
            <span>{props.character.species}</span>
        </li>
    );
};

export default Character;