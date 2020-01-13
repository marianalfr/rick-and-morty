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
    }
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
    console.log(this.state.data)
    return (
      <div className="App">
        <Header/>
        <main className="main">
          <Search
            search = {this.state.search}
          />
          <CharacterList
            characters = {this.state.data}
          />
        </main>
      </div>
    );
  };
};

export default App; 

