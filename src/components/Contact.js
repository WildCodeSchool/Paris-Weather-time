import React, { Component } from "react";
import ModalofContact from './ModalofContact';
import './ModalofContact.css';
import iconeContact from "../images/iconeContact.png"


class Contact extends Component{

constructor() {
    super();

    this.state = {
        isShow: false
    }
}
// fonction de l'ouverture de la modal
openModal = () => {
    this.setState({
        isShow: true
    });
}
// fonction de la fermeture de la modal
closeModal = () => {
    this.setState({
        isShow: false
    });
}

    render() {
        return (
            <div>
                <button className="btncontact" onClick={this.state.isShow ? this.closeModal : this.openModal}><img src={iconeContact} className="iconContact" alt="logo"/></button>
                <ModalofContact
                    showing={this.state.isShow}
                    close={this.closeModal}>
                </ModalofContact>
            </div>
        )
    }
}
export default Contact; 