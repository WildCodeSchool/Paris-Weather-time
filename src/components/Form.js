import React from "react";
import "./Form.css"

const Form = props => (
<div  className="A" id="cover">
  <form onSubmit={props.getWeather} >
    <div className="tb">
      <div className="td"><input type="text" name="city" placeholder="Search City..."/></div>
      <div className="td" id="s-cover">
        <button type="submit">
          <div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
</div>
);

export default Form;
