import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"

import Footer from './components/Footer';
import Logo from "./components/Logo"
import EffectModalFilter from "./components/EffectModalFilter"
import SimpleSlider from "./components/SimpleSlider"
import WeatherAPI from './components/WeatherAPI';
// import Contact from './components/Contact'
// import NavBarButton from './components/NavBarButton';

import BtnFilter from "./screen/BtnFilter"
import BtnProfil from "./screen/BtnProfil"
// import BtnFavorites from "./screen/BtnFavorites"

import './components/ModalofContact.css';
import './App.css';
import './components/BtnNavBar.scss';
import './components/WeatherDiv';
// import NavBarButton from './components/NavBarButton';

class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="l"><Logo /></div>
          <Switch>
            <Route exact path="/" component={App} />
            {/* <Route path="/filtre" component={Logo} /> */}
            <Route path="/profil" component={BtnFilter} />
            <Route path="/favoris" component={BtnProfil} />
          </Switch>
        </header>
        <div className="WeatherAPI"><WeatherAPI /></div>
        <SimpleSlider />
        <Footer />
      </div>
    )
  }
}




export default App;