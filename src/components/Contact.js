import React, { Component } from "react";
import ModalofContact from "./ModalofContact";

class Contact extends Component{

constructor() {
    super();

    this.state = {
        isShowing: false
    }
}

openModalHandler = () => {
    this.setState({
        isShowing: true
    });
}

closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
}

    render() {
        return (
            <div className="btn-NavBar">
                <button className="" onClick={this.state.isShowing ? this.closeModalHandler : this.openModalHandler}>CONTACT</button>
                <ModalofContact
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                </ModalofContact>
            </div>
        )
    }
}
export default Contact; 
