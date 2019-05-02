import React from "react"
import { Link } from "react-router-dom"

import favorites from "../images/favorites.png"

class BtnFavorites extends React.Component {
  render() {
    return (
      <div>
        <div className="btn-favorites">
          {/* <Link exact to="/favorites"><img src={favorites} className="icon" alt="logo" /></Link> */}
        </div>
      </div>
    )
  }
}

export default BtnFavorites