import React from "react"
import { NavLink } from "react-router-dom"

import filtre from "../images/filtre.png"

class BtnFilter extends React.Component {
    render() {
        return (
            <div>
                <NavLink exact to="/filtre" className="btn-filter"> <img src={filtre} className="icon" alt="logo"></img>
                dksqdjsqhd
                </NavLink>
            </div>
        )
    }
}

export default BtnFilter;