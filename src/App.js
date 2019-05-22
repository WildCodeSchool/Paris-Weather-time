import React, { Component } from 'react';

import Footer from './components/Footer';
import Logo from "./components/Logo"
import SimpleSlider from "./components/SimpleSlider"

import Contact from './components/Contact'
import NavBarButton from './components/NavBarButton';
import './components/ModalofContact.css';
import './App.css';
import './components/BtnNavBar.scss';
import './components/WeatherDiv';
import {Route, Switch} from 'react-router-dom'
import ActivityScreen from './screen/ActivityScreen';
import Home from './screen/Home'


class App extends Component {
  
  render() {
    return (

      <div className="App">
        <header className="App-header">
        <div className="logo1"><Logo /><span className="logoTitre">Weather Time</span></div>
          <NavBarButton />
          <Contact />
        </header>

        <Switch >
          <Route exact path="/" component={Home}/>
          <Route exact path="/activity/:id" component={ActivityScreen}/>
        </Switch>
        <div className="footer">
          <Footer />
        </div>
        </div>
      

    )
  }
}




export default App;