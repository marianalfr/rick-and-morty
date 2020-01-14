import React from 'react';
import Emoji from './Emoji';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Portal from '../images/Portal.png'

const CharacterDetails = props => {
    if(props.character === undefined){
        return(
            <div className="not-found">
                <p>There is nothing here. Go back home, please:</p>
                <Link to="/">
                    <img class="nav-logo" src={Portal} alt="home"/>
                </Link>
            </div>
        )
    } else {
        return (
            <div className="character__details">
                <div className="character__details-character">
                    <img src={props.character.image} alt={props.character.name}/>
                    <div className="character__details-character__text">
                    <h3>{props.character.name}</h3>
                        <ul className="detail-list">
                            <li>Status: {props.character.status === 'Alive' ? <Emoji symbol="💚" label="alive"/> : <Emoji symbol="💀" label="dead"/>}</li>
                            <li>Species: {props.character.species === 'Alien' ? <Emoji symbol="👽" label="alien"/> : <Emoji symbol="👫" label="human"/>}</li>
                            <li>Origin: {props.character.origin.name}</li>
                            <li>Episodes: {props.character.episode.length}</li>
                        </ul>
                    </div>
                </div>
                <ul className="character__details-nav">
                    <li><Link to={`/character/${props.character.id - 1}`}><i className="fas fa-arrow-left"></i></Link></li>
                    <li><Link to="/"><img class="nav-logo" src={Portal} alt="home"/></Link></li>
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

