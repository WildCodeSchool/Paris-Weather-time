import React from "react";
import favorites from "../images/favorites.png"

const BtnFavorite = () => {
    return (
        <header className="btn-NavBar">
            <button class="btn-2"><img src={favorites} className="icon" alt="logo"/></button>
        </header>
    )
}

export default BtnFavorite;