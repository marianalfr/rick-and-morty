import React from 'react';
import { Link } from 'react-router-dom';

const Character = props => {
    return(
        <Link to={`/character/${props.character.id}`}>
            <li key={props.character.id}>
                <img src={props.character.image}/>
                <h3>{props.character.name}</h3>
                <span>{props.character.species}</span>
            </li>
        </Link>
    );
};

export default Character;