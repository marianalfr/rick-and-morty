import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

const Character = props => {
    return(
        <Link to={`/character/${props.character.id}`}>
            <li className="character" key={props.character.id}>
                <img src={props.character.image} alt={props.character.name}/>
                <div className="character-name">
                    <h3>{props.character.name}</h3>
                </div>
                <div className="character-species">     
                    {props.character.species === 'Alien' ? <Emoji symbol="👽" label="alien"/> : <Emoji symbol="👫" label="human"/>}
                </div>
            </li>
        </Link>
    );
};

Character.propTypes = {
    character: PropTypes.object
};

export default Character;