import React from "react"
import ModalAfficahage from "./ModalAffichage"
import "./ModalAffichage.css"
 

  
class AsmaModal extends React.Component{

   state={
      modal: false
  
  }
  
  modalToggle=()=>{
    this.setState({
      modal: !this.state.modal
    })
  }
  render(){
    return(
      <div>
        <button className="place-order" onClick={this.modalToggle}>
          <span className="fa fa-shopping-cart"></span>
        </button>
        <ModalAfficahage onClick={this.modalToggle} status={this.state.modal}/>
      </div>
    )
  }
    
  }

export default AsmaModal

