import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';

const Header = () => {
    return(
        <header className="header">
            <Link to="/"><img src={Logo} alt="Rick and Morty logo"/></Link>
        </header>
    );
};

export default Header;