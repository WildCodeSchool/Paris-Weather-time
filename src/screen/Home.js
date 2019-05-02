import React, { Component } from 'react'
import WeatherAPI from '../components/WeatherAPI'
import '../components/Home.css'
class Home extends Component {
    render() {
        return (
            <div className="WeatherAPI">
                <WeatherAPI />
            </div>
        )
    }
}

export default Home