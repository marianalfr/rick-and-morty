import React from 'react';
import '../stylesheets/App.css';
import { fetchCharacters } from '../services/Api'
import CharacterList from './CharacterList';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';
// import Loader from './Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  };
};

export default App; 

