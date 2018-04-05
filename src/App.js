import React, { Component } from 'react';
import './App.css';
import AsideComponent from './components/AsideComponent';
import MainComponent from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AsideComponent />
        <MainComponent />
      </div>
    );
  }
}

export default App;
