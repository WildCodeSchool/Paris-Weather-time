import React, { Component } from 'react';
import filtre from "../images/filtre.png"
import EffectModalFilter from './EffectModalFilter';

class ModalFilter extends Component {

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

	/*-- Show Modal On-Off onClick --*/
	render() {
		return (
			<div className="btn-NavBar">
				<button className="btn-filter" onClick={this.state.isShowing ? this.closeModalHandler : this.openModalHandler}><img src={filtre} className="icon" alt="logo" /></button>
				<EffectModalFilter
					className="modal"
					show={this.state.isShowing}
					close={this.closeModalHandler}>
					Maybe aircrafts fly very high because they don't want to be seen in plane sight?
        </EffectModalFilter>
			</div>

		);
	}
}

export default ModalFilter;
