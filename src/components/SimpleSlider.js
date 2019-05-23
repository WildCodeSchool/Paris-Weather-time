import React, { Component } from "react";
import Slider from "react-slick";
import ActivityCards from "./ActivityCards";
import Activity from "./Activity.json"
import './SimpleSlider.css';



class SimpleSlider extends Component {

  state = {
    city: '',
    lat: '',
    loading: true,
    lon: '',
    weatherData: [],
  }

  getWeather = (e) => {
    if (this.state.loading) {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83`)
        .then(res => res.json())
        //permet de remplir le tableau weatherData dans le state et de desactiver loading - voir le if/else au début du render
        .then(res => this.setState({ weatherData: res, loading: false, city: res.city.name }))
    } else {
      // s'active quand le bouton de Form.js est activé, celui-ci appelant la fonction getWeather et le loading étant false après le premier chargement de la page
      e.preventDefault();
      const city = e.target.city.value;
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83`)
        .then(res => res.json())
        .then(res => this.setState({ weatherData: res, city: res.city.name }))
    }
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

  componentDidMount() {
    this.getLocation()
  }

   
  

  render() {


    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,

            infinite: true,
            repeat: 99

          }
        }
      ]
    }

    //le if/else, permet de s'assurer que le render ne s'active que quand l'API a bien chargé ses données dans le state et donc transformé loading en false
    if (this.state.loading) {
      return (<div>loading</div>)
    } else if (this.state.weatherData.list[0].weather[0].main === "beau") {
        return (
          <Slider {...settings}>
            {Activity.filter(data => data.type.toString().includes("moyen"))
              .map((data, index) => <ActivityCards {...data} key={index} />)}
          </Slider>
        )
      } else {
        return (
          <Slider {...settings}>
            {Activity.map((data, index) => <ActivityCards {...data} key={index} />)}
          </Slider>
        )
      }

      
    }
  }


export default SimpleSlider

