import React from "react";
import "./Weather.css"


const Weather = props => (
	<div >
	<p className="inputCity"> { props.city }</p> 	  
	<p className="inputCity"> { props.temperature }</p> 	
	<p className="inputCity"> {props.humidity} </p> 
	<p className="inputCity"> { props.description } </p> 
	<p className="inputCity"> {props.error}</p>
	</div>
);

export default Weather;