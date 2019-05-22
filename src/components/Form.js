import React from "react";
import "./Form.css"

const Form = props => (
<div  className="A" id="cover">
  <form onSubmit={props.getWeather} >
    <div className="global">
   <div className="searchBar"> <input className="inputAsma" type="text" name="city"
    placeholder="Search City..."/></div>
      <div className="searchBar" id="s-cover">
        <button className="buttonSearsh" type="submit">
          <div id="s-circle"></div>
          <span className="litlebar"></span>
        </button>
      </div>
    </div>
  </form>
</div>
);

export default Form;
