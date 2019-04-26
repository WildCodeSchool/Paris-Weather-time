import React, { Component } from "react";
import ModalofContact from './ModalofContact';

class Contact extends Component{

constructor() {
    super();

    this.state = {
        isShow: false
    }
}

openModal = () => {
    this.setState({
        isShow: true
    });
}

closeModal = () => {
    this.setState({
        isShow: false
    });
}

    render() {
        return (
            <div className="btn-NavBar">
                <button className="" onClick={this.state.isShow ? this.closeModal : this.openModal}></button>
                <ModalofContact
                    className="modal"
                    showing={this.state.isShow}
                    close={this.closeModal}>
                </ModalofContact>
            </div>
        )
    }
}
export default Contact; 