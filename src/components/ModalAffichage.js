import React from "react"
import "./ModalAffichage.css"



const ModalAffichage = (props)  =>{
  const data = {
         price:  89 + "$",
         title: "Ova Highchair",
        description: "From formula to fruits, your baby's got a lot of eating ahead. An Ova high chair is the right place for breakfast, lunch and dinner.",
      
    }
    console.log(props)
   return(
    
        <div className="modal" data-status={props.status}>
          <div className="modal-left">
            <span className="price-tag">{data.price}</span>
          </div>
          <div className="modal-right">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button onClick={props.onClick} className="close">
              <span className="fa fa-close"></span>
            </button>
          </div>
        </div>
      );
    }
  
  
  export default ModalAffichage ; 