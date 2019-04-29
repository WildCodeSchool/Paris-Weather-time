import React from "react"
import { NavLink } from "react-router-dom"

import profil from "../images/profil.png"

class BtnProfil extends React.Component {
  render() {
    return (
        <div className="btn-profil">
        <NavLink exact to="/profil"><img src={profil} className="icon" alt="logo" ></img>
        jqdsqhdsq
        </NavLink>
        </div>

    )
  }
}

export default BtnProfil