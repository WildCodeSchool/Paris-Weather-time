import React, { Component } from 'react';
<<<<<<< HEAD
import WeatherDiv from './components/WeatherDiv';
import Footer from './components/Footer';
import ActivityCards from './components/ActivityCards';
import BtnFilter from './components/BtnFilter';
import BtnLogin from './components/BtnLogin';
import BtnFavorite from './components/BtnFavorite';
import Logo from './components/Logo';
import Contact from './components/Contact';
import Modal from './components/ModalofContact';

import './components/WeatherDiv';
import './components/Logo.css';
import './components/BtnNavBar.scss';
import './App.css';
import './components/ModalofContact.css';
import './components/ModalofContact';
=======
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import Footer from './components/Footer';
import Logo from "./components/Logo"
import ModalFilter from "./components/ModalFilter"
import SimpleSlider from "./components/SimpleSlider"
import WeatherAPI from './components/WeatherAPI';
import './App.css';
import './components/BtnNavBar.scss';
import './components/WeatherDiv';
>>>>>>> 3ad8c3c33fb10fb3309682e6ca1e204a5932cbd4



class App extends Component {
  state = {
  }
  render() {
    return (
<<<<<<< HEAD
    <div> 
        <header className="App-header">
          <BtnFilter />
          <BtnLogin />  
          <BtnFavorite />

        <div className="l"><Logo /></div> 

        </header>
    </div> 
    );
  }

    state = {
        weatherData: [],
        lo: true,
    }

    getWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83')
            .then(res => res.json())
            .then(res => this.setState({ weatherData: res, lo: false }))
        // .then(res => this.state.lo ? console.log("pipi")
        // : console.log('totototo',this.state.weatherData.weather[0]))
    }
    
    componentDidMount() {
        this.getWeather()
    }
    
    render() {
        
        if (this.state.lo) {
            return (<div>loading</div>)
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <BtnFilter />
                        <BtnLogin />
                        <BtnFavorite />
                    </header>
                    
                    <WeatherDiv weatherData={this.state.weatherData} />
=======
      <div className="App">
        <header className="App-header">
          <div className="l"><Logo /></div>
          <BtnLogin />
          <BtnFavorite />
        </header>
        <ModalFilter />
        <div className="WeatherAPI"><WeatherAPI /></div>
        <SimpleSlider/>
        <Footer />


      </div>
    )
  }
}
>>>>>>> 3ad8c3c33fb10fb3309682e6ca1e204a5932cbd4

                    

<<<<<<< HEAD
                    <ActivityCards
                            photo="https://fever.imgix.net/plan/photo/a81f63a4-3f29-11e9-9020-067dfd978c4d.jpg?auto=compress&auto=Format&fm=jpg&w=220&h=220"
                            alt="clubbing"
                            activity="Soirée clubbing"
                            price="15€90" />
                    </div>
                    <Contact />
                    <Footer  />
                </div>
            )
        }
    }
}
=======
>>>>>>> 3ad8c3c33fb10fb3309682e6ca1e204a5932cbd4


export default App;
