import React from "react";

import "./ModalofContact.css";

const ModalofContact = props => {
  return (
    <div>
      <div
        className="modal-wrapperContact"
        style={{
          transform: props.showing ? "translateY(-60vh)" : "translateY(10vh)",
          opacity: props.showing ? "1" : "0"
        }}
      >
        <div className="modal-header">
          <h3>CONTACT</h3>
          <span
            className="close-modal-btn"
            onClick={props.close}>×</span>
        </div>

        <div className="modal-body">
          <input className="firstName" placeholder="First name" type="text" name="name" />
          <input className="lastName" placeholder="Last name" type="text" name="name"/>
          <input className="email" placeholder="Email" type="text" name="name" />
          <textarea cols={30} rows={20} />
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>
            CLOSE
          </button>
          <button className="btn-continue">SEND</button>
        </div>
      </div>
    </div>
  );
};

export default ModalofContact;
