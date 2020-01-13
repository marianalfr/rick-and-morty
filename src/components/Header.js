import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <Link to="/"> <h1>Rick and Morty</h1></Link>
        //<img src="../images/Rick-and-Morty-logo.png" alt="Rick and Morty Logo"/>
    );
};

export default Header;