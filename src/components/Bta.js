import React, { Component } from "react";
import favorites from "../images/favorites.png"
import profil from "../images/profil.png"
import filtre from "../images/filtre.png"
import Btom from './Btom';

class NavBarButton extends Component {


	state = {
		isShowing: false,
		btn1: false,
		btn2: false,
		btn3: false,

	}

	/*-- Open Modal --*/
	openModalHandler = (param) => {
		if ("btn1" === param) {
			console.log("btn1")
			this.setState({ isShowing: true, btn1: true, btn2: false, btn3: false })
		} else if ("btn2" === param) {
			console.log("btn2")
			this.setState({ isShowing: true, btn1: false, btn2: true, btn3: false })
		} else if ("btn3" === param) {
			console.log("btn3")
			this.setState({ isShowing: true, btn1: false, btn2: false, btn3: true })
		}
	}

	/*-- Close Modal --*/
	closeModalHandler = (param) => {
		if ("btn1" === param) {
			console.log("btn1")
			this.setState({ isShowing: false, btn1: false, btn2: false, btn3: false })
		} else if ("btn2" === param) {
			console.log("btn2")
			this.setState({ isShowing: false, btn1: false, btn2: false, btn3: false })
		} else if ("btn3" === param) {
			console.log("btn3")
			this.setState({ isShowing: false, btn1: false, btn2: false, btn3: false })
		}
	}

	render() {
		const { isShowing, btn1, btn2, btn3 } = this.state
		return (
			<div className="btn-NavBar">
				<button className="btn-3" onClick={this.state.isShowing ? () => this.closeModalHandler("btn1") : () => this.openModalHandler("btn1")}><img src={favorites} className="icon" alt="logo" /></button>
				<button className="btn-3" onClick={this.state.isShowing ? () => this.closeModalHandler("btn2") : () => this.openModalHandler("btn2")}><img src={profil} className="icon" alt="logo" /></button>
				<button className="btn-3" onClick={this.state.isShowing ? () => this.closeModalHandler("btn3") : () => this.openModalHandler("btn3")}><img src={filtre} className="icon" alt="logo" /></button>
				{
					btn1 === true ?
						<div className="modal-wrapper"
							style={{
								transform: this.state.isShowing ? 'translateY(0vh)' : 'translateY(-100vh)',
								opacity: this.state.isShowing ? '1' : '0'
							}}>
							<div className="modal-body">
								<p>
									popopopopopopopo po
					 			</p>
							</div>
						</div> : <div>popo</div>
				}
				{/* <Btom
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    Maybe aircrafts fly very high because they don't want to be seen in plan					e sight ?
                </Btom> */}
			</div>
		)
	}
}

export default NavBarButton;