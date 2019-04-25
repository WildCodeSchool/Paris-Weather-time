import React, { Component } from "react";
import Modal from './ModalofContact';

class Form extends Component{

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
                <button className="" onClick={this.state.isShowing ? this.closeModalHandler : this.openModalHandler}></button>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                </Modal>
            </div>
        )
    }
}
export default Form; 