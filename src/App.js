import React, { Component } from 'react';

import NavBarButton from "./components/NavBarButton"
import Footer from './components/Footer';
import Logo from "./components/Logo"
import SimpleSlider from "./components/SimpleSlider"
import WeatherAPI from './components/WeatherAPI';

import './App.css';
import './components/BtnNavBar.scss';
import './components/WeatherDiv';



class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="l"><Logo /></div>
          <NavBarButton />
        </header>
        <div className="WeatherAPI"><WeatherAPI /></div>
        <SimpleSlider/>
        <Footer />
      </div>
    )
  }
}

                    


export default App;
