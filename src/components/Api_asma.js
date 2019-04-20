import React from "react";
import Form from "./Form";
import Weather from "./Weather";
import "./Form.css"



class Api_asma extends React.Component {
  state = {
    temperature: 19,
    city:"Paris" ,
    humidity: 12,
    descriptioFormn: "ciel dégagé",
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
     const city = e.target.city.value;
 
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83`)
    .then(response  =>  response.json())
    .then(data  => { 
      if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: "Les données rentrées ne sont pas valides"
      });
    }
  });
}
    render() {
    return (
      <div>
     
        <div><Form getWeather={this.getWeather} />  </div>                      
        <Weather
          temperature={this.state.temperature} 
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
                
      </div>

    );
  }
};

export default Api_asma
;
