import React, { Component } from 'react';
import ActivityCards from './components/ActivityCards'
import Api_asma from './components/Api_asma';
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import Footer from './components/Footer';
import Logo from "./components/Logo"
import ModalFilter from "./components/ModalFilter"
import WeatherDiv from './components/WeatherDiv';
import './App.css';
import './components/BtnNavBar.scss';
import './components/Logo.css';
import './components/WeatherDiv'



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
                    <div className="l"><Logo /></div> 
                        <BtnLogin />
                        <BtnFavorite />
                    </header>
                   
                    <ModalFilter /> 
                   <div className="Api_asma"><Api_asma /></div> 
                    <WeatherDiv weatherData={this.state.weatherData} />
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

}

export default App;
