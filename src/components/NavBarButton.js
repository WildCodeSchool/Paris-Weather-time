import React, { Component } from "react";

import EffectModalFilter from './EffectModalFilter';
import filtre from '../images/filtre.png'

import '../components/BtnNavBar.scss'
import FilterInModal from "./FilterInModal";


class NavbarButton extends Component {

    state = {
        isShowing: false
    }

    // fonction de l'ouverture de la modal
    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }
    // fonction de la fermeture de la modal
    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
    render() {
        return (
            <div>
                <header className="btn-filter">
                    <img src={filtre} onClick={this.state.isShowing ? this.closeModalHandler : this.openModalHandler} className="icon" alt="logo" />
                </header>
                <EffectModalFilter
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                <FilterInModal/>
                <button className="applyfilter"> Appliquer Filtres</button>
                </EffectModalFilter>
            </div>
        )
    }
}

export default NavbarButton;