import React, { Component } from "react";
import ModalofContact from './ModalofContact';
import './ModalofContact.css';


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
            <div>
                <button onClick={this.state.isShow ? this.closeModal : this.openModal}><img src="https://img.icons8.com/metro/26/000000/new-post.png"className="icon" alt="logo"/></button>
                <ModalofContact
                    showing={this.state.isShow}
                    close={this.closeModal}>
                </ModalofContact>
            </div>
        )
    }
}
export default Contact; 