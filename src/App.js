
import React, { Component } from 'react';
import BtnLogin from "./components/BtnLogin"
// import BtnFavorite from "./components/BtnFavorite"
import Footer from './components/Footer';
import Logo from "./components/Logo"
import ModalFilter from "./components/ModalFilter"
import SimpleSlider from "./components/SimpleSlider"

import Contact from './components/Contact'
import './components/ModalofContact.css';
import './App.css';
import './components/BtnNavBar.scss';
import './components/WeatherDiv';
import {Route, Switch} from 'react-router-dom'
import ActivityScreen from './screen/ActivityScreen';
import Home from './screen/Home'

class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo1">
            <Logo />
            <span className="logoTitre">Weather Time</span>
          </div>
          <BtnLogin />
          <Contact />
          <ModalFilter />
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