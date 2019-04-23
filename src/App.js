import React, { Component } from 'react';
import ActivityCards from './components/ActivityCards'
import ApiAsma from './components/ApiAsma';
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import Footer from './components/Footer';
import Logo from "./components/Logo"
import ModalFilter from "./components/ModalFilter"
import './App.css';
import './components/BtnNavBar.scss';
import './components/Logo.css';
import './components/WeatherDiv';



class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="l"><Logo /></div>
          <BtnLogin />
          <BtnFavorite />
        </header>
        <ModalFilter />
        <div className="Api_asma"><ApiAsma /></div>
        <div className="cardactivity">
          <ActivityCards
            photo="https://www.auteur-roman-nouvelles.com/wp-content/uploads/2015/02/a1933092357_10-300x300.jpg"
            alt="clochard"
            activity="Crache sur un clochard"
            price="Gratuit"
          />

          <ActivityCards
            photo="https://fever.imgix.net/plan/photo/a81f63a4-3f29-11e9-9020-067dfd978c4d.jpg?auto=compress&auto=format&fm=jpg&w=220&h=220"
            alt="clubbing"
            activity="Soirée clubbing"
            price="15€90"
          />
        </div>
        <Footer />


      </div>
    )
  }
}



export default App;
