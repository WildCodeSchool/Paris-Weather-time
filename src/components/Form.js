
import React from "react";
import "./Form.css"

const Form = props => (
<div  className="A" id="cover">
  <form onSubmit={props.getWeather} >
    <div className="global">
      <div className="searchBar"><input type="text" name="city" placeholder={props.city}/></div>
      <div className="searchBar" id="s-cover">
        <button className="leButton" type="submit">
          <div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>
);

export default Form;