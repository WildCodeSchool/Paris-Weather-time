import React, { Component } from "react";
import profil from "../images/profil.png"
import EffectModalFilter from './EffectModalFilter';

class BtnLogin extends Component {

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
                <button className="btn-3" onClick={this.state.isShowing ? this.closeModalHandler : this.openModalHandler}><img src={profil} className="icon" alt="logo" /></button>
                <EffectModalFilter
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </EffectModalFilter>
            </div>
        )
    }
}

export default BtnLogin