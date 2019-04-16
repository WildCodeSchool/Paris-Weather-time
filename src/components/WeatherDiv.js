import React from 'react';
import './WeatherDiv.css';


//l'objet Weather Data est celui qui est passé par le props de la balise WeatherDiv dans App.js. C'est un objet retourné dans le state par l'API
const WeatherDiv = ({weatherData}) =>{
    const icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"
   
    return (
        <div>
            <h1 className="City">{weatherData.name}</h1>
            <img className="WeatherImage" src={icon} alt="Weather"/>
            <p className="Description">{weatherData.weather[0].description}</p>
            <p className="Description">{weatherData.main.temp} °C</p>
        </div>
    )

}
export default WeatherDiv