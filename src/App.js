import React, { Component } from 'react';
import './App.css';
import BtnFilter from "./components/BtnFilter"
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import Logo from "./components/Logo"
import './components/Logo.css';
import './components/BtnNavBar.scss';
import './App.css'



class App extends Component {
  render() {
    return (
    <div> <header className="App-header">
        
          <BtnFilter />
          <BtnLogin />  
          
          <BtnFavorite />
             <div className="l"><Logo /></div> 

        </header>
    
        </div>
       
    
    );
  }
}

export default App;
