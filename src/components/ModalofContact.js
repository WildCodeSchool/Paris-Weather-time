import React from "react";

import "./ModalofContact.css";

// instruction a faire si ouverture ou fermeture de la modal (ouvrir la classe modal open lorsqu'on appuie sur le bouton)
const ModalofContact = props => {
let changeModal = 'modalClose'

if (props.showing === true){
  changeModal = 'modalOpen'
}else{
  changeModal = 'modalClose'
}

  return (
      <div
        className={changeModal}
        style={{
          transform: props.showing ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.showing ? "1" : "0"
        }}
          //   "
        //   display : props.showing ? "block" : "none",
        // }}
      >
      {/* header de la modal */}
        <div className="modal-header">
          <h3>CONTACT</h3>
        {/* croix de fermeture de la modal */}
          <p
            className="close-modal-btn"
            onClick={props.close}></p>
        </div>


        {/* body de la modal */}
        <div className="modal-body">
          <input className="firstName" placeholder="First name" type="text" name="name" />
          <input className="lastName" placeholder="Last name" type="text" name="name"/>
          <input className="email" placeholder="Email" type="text" name="name" />
          <textarea className="modalarea" cols={45} rows={20} />
        </div>
        {/* pied de la modal */}
        <div className="modal-footer">
        
          <button className="btn-cancel" onClick={props.close}>
            CLOSE
          </button>
          <button className="btn-continue">SEND</button>
        </div>
      </div>
  );
};

export default ModalofContact;