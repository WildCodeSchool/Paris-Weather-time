import React, { Component } from 'react';
import WeatherDiv from './components/WeatherDiv';
import ModalFilter from './components/ModalFilter'
import SimpleSlider from './components/SimpleSlider'
import Footer from './components/Footer'
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import './App.css';
import './components/WeatherDiv'
import './components/BtnNavBar.scss';

class App extends Component {
    state = {
        weatherData: [],
        loading: true,
        lat: '',
        lon: ''
    }

    //fonction qui permet d'obtenir la localisation
    getLocation = () => {
        //si l'utilisateur accepte d'être géolocalisé
        if (navigator.geolocation) {
            //getCurrentPosition permet de retourner un objet position qui donne notamment les coordonnées
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({ lon: position.coords.longitude, lat: position.coords.latitude })
                //Attention cette ligne est importante, elle permet de s'assurer que getWeather ne s'active que après avoir obtenu la geolocalisation
                this.getWeather()
            })
        } else {
            //alerte qui s'active si l'utilisateur n'accepte pas d'être géolocalisé
            alert("Trop nul")
        }
    }
    // fonction qui recherche l'API météo
    getWeather = () => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83`)
            .then(res => res.json())
            //permet de remplir le tableau weatherData dans le state et de desactiver loading - voir le if/else au début du render
            .then(res => this.setState({ weatherData: res, loading: false }))
    }

    //

    componentDidMount() {
        this.getLocation()
    }

    render() {

        //le if/else, permet de s'assurer que le render ne s'active que quand l'API a bien chargé ses données dans le state et donc transformé loading en false
        if (this.state.loading) {
            return (<div>loading</div>)
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <BtnLogin />
                        <BtnFavorite />
                    </header>
                    <ModalFilter />
                    <WeatherDiv weatherData={this.state.weatherData} />
                    <SimpleSlider/>

                    <Footer />
                </div>
            )
        }
    }
}

export default App;
