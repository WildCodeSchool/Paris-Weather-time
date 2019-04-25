import React, { Component } from "react";
import favorites from "../images/favorites.png"
import EffectModalFilter from './EffectModalFilter';

class NavBarButton extends Component {


    state = {
        isShowing: false
    }

    /*-- Open Modal --*/
    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    /*-- Close Modal --*/
    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <div className="btn-NavBar">
                <button className="btn-3" onClick={this.state.isShowing ? this.closeModalHandler : this.openModalHandler}><img src={favorites} className="icon" alt="logo" /></button>
                <EffectModalFilter
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    Maybe aircrafts fly very high because they don't want to be seen in plane sight ?
                </EffectModalFilter>
            </div>
        )
    }
}

export default NavBarButton;