import React from 'react';
import '../stylesheets/App.scss';
import { fetchCharacters } from '../services/Api'
import Header from './Header';
import Search from './Search';
import CharacterList from './CharacterList';
import { Switch, Route } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: ''
    };
    this.getSearch = this.getSearch.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
  };

  componentDidMount(){
    fetchCharacters()
    .then(data => {
      this.setState({
        data: data.results
      });
    });
  };

  getSearch(value){
    this.setState({
      search: value
    });
  };

  renderCharacterDetails(props){
    const characterId = props.match.params.id;
    const character = this.state.data.find(character => character.id === parseInt(characterId));
    return(
      <CharacterDetails character={character}/>
    )
  }

  render() {
    return (
      <div className="App">
        <wrapper className="App__wrapper">
          <Header/>
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Search
                  getSearch = {this.getSearch}
                  search = {this.state.search}
                />
                <CharacterList
                  characters = {this.state.data}
                  search = {this.state.search}
                />
              </Route>
              <Route path="/character/:id" render={this.renderCharacterDetails}/>
            </Switch>
            
          </main>
        </wrapper>
      </div>
    );
  };
};

export default App; 

