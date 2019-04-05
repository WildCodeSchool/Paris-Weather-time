import React, { Component } from 'react';
import './App.css';
import Navbar from './commponents/Navbar'
import BtnFilter from "./components/BtnFilter"
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import './components/BtnNavBar.scss';
import './App.css'

// API meteo 
const API_KEY="b9657f55f833d7cff18e3c5da9645015";


class App extends Component {
 getweather = async () =>{
const api_call = await fetch("https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b9657f55f833d7cff18e3c5da9645015")
 const data =await api_call.json();
 console.log(data);
 

}

  render() {

    return (
      <div className="App">
       
       <Navbar />
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
