import React from "react";
import profil from "../images/profil.png"

const BtnLogin = () => {
    return (
        <header className="btn-NavBar">
                <button className="btn-3"><img src={profil} className="icon" alt="logo"/></button>
        </header>
    )
}

export default BtnLogin