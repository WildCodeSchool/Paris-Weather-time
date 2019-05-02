import React, { Component } from 'react';

import Footer from './components/Footer';
import Logo from "./components/Logo"
import SimpleSlider from "./components/SimpleSlider"
import WeatherAPI from './components/WeatherAPI';
import Contact from './components/Contact'
import NavBarButton from './components/NavBarButton';


import './components/ModalofContact.css';
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
          <div className="logo1"><Logo /><span className="logoTitre">Weather Time</span></div>
          <NavBarButton/>
           <Contact />
   
        </header>   
        <body> 
        <div className="WeatherAPI"><WeatherAPI /></div>
        <div className="footer"> <Footer /></div>
        </body>
        </div>
       
       
    )
  }
}




export default App;