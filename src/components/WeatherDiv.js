import React from 'react';
import './WeatherDiv.css';


//l'objet Weather Data est celui qui est passé par le props de la balise WeatherDiv dans App.js. C'est un objet retourné dans le state par l'API
const WeatherDiv = props =>{
    let icon = props.weather[0].icon
    if ( icon === "01d") {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Hot_Sun_Day-256.png"} 
    else if ( icon === "01n") {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Moon_Night_Sky-256.png"
        }
    else if ( icon === "02d") {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Sunny_Sun_Cloudy-256.png"
        }
    else if ( icon === "02n") {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Moon_Night_Cloud-256.png"
        }
    else if ( icon === "03d" || icon === "03n" || icon === "04d" || icon === "04n" ) {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Cloudy_Season_Cloud-256.png"
        }
    else if ( icon === "09d" || icon === "09n" ) {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Rain_Cloud_Climate-256.png"
        }
    else if ( icon === "10d") {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Sunny_Rain_Climate-256.png"
        }
    else if ( icon === "10n") {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Night_Rain_Climate-256.png"
        }
    else if ( icon === "11d" || icon === "11n" ) {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Lightning_Cloud_Storm-256.png"
        }
    else if ( icon === "13d" || icon === "13n" ) {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Flake_Flakes_Snowflake-256.png"
        }
    else if ( icon === "50d" ) {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Sunrise_Sunset_Sun-256.png"
        }
    else if ( icon === "50n" ) {
        icon = "https://cdn2.iconfinder.com/data/icons/weather-and-forecast-free/32/Weather_Weather_Forecast_Moon_Cloud_Reflection-256.png"
        }

  

    const dayIndex = new Date().getDay() + props.index
    const daylist = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi"]
    const today = daylist[dayIndex]
    let newTemp = props.main.temp
    const slicedTemp = newTemp.toString().slice(0,-3)
    

    return (
        <div className="weatherDiv">
        	<p className="inputCity"> {props.city }</p> 
            <p className="day">{today}</p>
            <img className="weatherImage" src={icon} alt="Weather"/>
            <p className="description">{props.weather[0].description}</p>
            <p className="description">{slicedTemp} °C</p>

        </div>
    )

}
export default WeatherDiv