import React, { Component } from 'react';
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import Footer from './components/Footer';
import Logo from "./components/Logo"
import ModalFilter from "./components/ModalFilter"
import SimpleSlider from "./components/SimpleSlider"
import Deck from './components/Deck'
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
          <BtnLogin />
          <BtnFavorite />
          <ModalFilter />
        </header>

        <body className="body">         
        
       
       
        <Deck/>
        
        </body>

        <SimpleSlider/>
        <Footer />


      </div>
    )
  }
}

                    


export default App;
