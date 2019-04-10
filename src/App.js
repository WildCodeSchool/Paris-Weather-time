import React, { Component } from 'react';
import WeatherDiv from './components/WeatherDiv';
import Footer from './components/Footer';
import ActivityCards from './components/ActivityCards';
import ModalFilter from "./components/ModalFilter"
import BtnLogin from "./components/BtnLogin"
import BtnFavorite from "./components/BtnFavorite"
import './App.css';
import './components/WeatherDiv'
import './components/BtnNavBar.scss';

class App extends Component {
	state = {
		weatherData: [],
		lo: true,
	}

	getWeather = () => {
		fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83')
			.then(res => res.json())
			.then(res => this.setState({ weatherData: res, lo: false }))
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
						<BtnLogin />
						<BtnFavorite />
					</header>
						<ModalFilter />
						<WeatherDiv weatherData={this.state.weatherData} />

					<div className="cardactivity">
						<ActivityCards
							photo="https://www.auteur-roman-nouvelles.com/wp-content/uploads/2015/02/a1933092357_10-300x300.jpg"
							alt="clochard"
							activity="Crache sur un clochard"
							price="Gratuit" />

						<ActivityCards
							photo="https://fever.imgix.net/plan/photo/a81f63a4-3f29-11e9-9020-067dfd978c4d.jpg?auto=compress&auto=format&fm=jpg&w=220&h=220"
							alt="clubbing"
							activity="Soirée clubbing"
							price="15€90" />
					</div>
					<Footer />
				</div>
			)
		}
	}
}

export default App;
