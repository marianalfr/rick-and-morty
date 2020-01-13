import React from 'react';
import '../stylesheets/App.css';
import { fetchCharacters } from '../services/Api'
import Header from './Header';
import Search from './Search';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: ''
    };
    this.getSearch = this.getSearch.bind(this);
  }

  getSearch(value){
    this.setState({
      search: value
    })
  }

  componentDidMount(){
    fetchCharacters()
    .then(data => {
      this.setState({
        data: data.results
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <main className="main">
          <Search
            getSearch = {this.getSearch}
            search = {this.state.search}
          />
          <CharacterList
            characters = {this.state.data}
            search = {this.state.search}
          />
        </main>
      </div>
    );
  };
};

export default App; 

