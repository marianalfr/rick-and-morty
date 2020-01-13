import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Character = props => {
    return(
        <Link to={`/character/${props.character.id}`}>
            <li key={props.character.id}>
                <img src={props.character.image} alt={props.character.name}/>
                <h3>{props.character.name}</h3>
                <span>{props.character.species}</span>
            </li>
        </Link>
    );
};

Character.propTypes = {
    character: PropTypes.object
};

export default Character;