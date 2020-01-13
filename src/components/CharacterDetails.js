import React from 'react';
import Emoji from './Emoji';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetails = props => {
    if(props.character === undefined){
        return(
            <p>Loading...</p>
        )
    } else {
        return (
            <div className="character-details">
                <img src={props.character.image} alt={props.character.name}/>
                <div className="character-details__text">
                <h3>{props.character.name}</h3>
                    <ul className="detail-list">
                        <li>Status: {props.character.status === 'Alive' ? <Emoji symbol="💚" label="alive"/> : <Emoji symbol="💀" label="dead"/>}</li>
                        <li>Species: {props.character.species === 'Alien' ? <Emoji symbol="👽" label="alien"/> : <Emoji symbol="👫" label="human"/>}</li>
                        <li>Origin: {props.character.origin.name}</li>
                        <li>Episodes: {props.character.episode.length}</li>
                    </ul>
                </div>
                <ul className="character-detais__nav">
                    <li><Link to={`/character/${props.character.id - 1}`}><i className="fas fa-arrow-left"></i></Link></li>
                    <li><Link to="/"><i className="fas fa-home"></i></Link></li>
                    <li><Link to={`/character/${props.character.id + 1}`}><i className="fas fa-arrow-right"></i></Link></li>
                </ul>
            </div>
        );
    }
};

CharacterDetails.propTypes = {
    character: PropTypes.object
};

export default CharacterDetails;

