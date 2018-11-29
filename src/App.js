import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./search/Search"


class App extends Component {

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <Search />
      </header>
      </div>

    );
  }
}

export default App;
