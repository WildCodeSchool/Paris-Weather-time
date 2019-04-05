import React, { Component } from 'react';
import BtnFilter from "./components/BtnFilter"
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import './components/BtnNavBar.scss';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BtnFilter />
          <BtnLogin />
          <BtnFavorite />

        </header>
      </div>
    );
  }
}

export default App;
