
// import React from "react";
// import { animated, interpolate } from "react-spring/hooks";
// import WeatherDiv from "./WeatherDiv"

// /*No comment here read only*/
// class Card extends React.Component {

// state = {
//     weatherData: [],
//     lo: true,
// }

// getWeather = () => {
//     fetch('http://api.openweathermap.org/data/2.5/weather?q=Perigueux&lang=fr&units=metric&appid=e8fc88dd5f1edd7f7ff6a9a5be06bd83')
//         .then(res => res.json())
//         .then(res => this.setState({ weatherData: res, lo: false }))
// }

// componentDidMount() {
//     this.getWeather()
// }

//   render() {
//     const { i, x, y, rot, scale, trans, bind,} = this.props;
  

//     if (this.state.lo) {
//       return (<div>loading</div>)
//   } else {
    
//     return (
//       <animated.div
//         key={i}
//         style={{
//           transform: interpolate(
//             [x, y],
//             (x, y) => `translate3d(${x}px,${y}px,0)`
//           )
//         }}
//       >
//         <animated.div
//           {...bind(i)}
//           style={{
//             transform: interpolate([rot, scale], trans)
//           }}
//         >
//           <div className="card">
           
//             <div><WeatherDiv weatherData={this.state.weatherData} /></div>

//           </div>
//         </animated.div>
//       </animated.div>
//     );
//   }
// }
// }

// export default Card;

