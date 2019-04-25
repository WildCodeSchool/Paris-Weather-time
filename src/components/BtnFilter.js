import React from "react";
import filtre from "../images/filtre.png"

const BtnFilter = () => {
    return (
        <header className="btn-NavBar">
                <button class="btn-1"><img src={filtre} className="icon" alt="logo"/></button>
        </header>
    )
}

export default BtnFilter