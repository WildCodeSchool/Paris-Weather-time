import React from 'react'

import './Modal.css';

const modal = (props) => {
    return (
        <div> 

            <div className="modal-wrapper"
                style={{
                    // how the modal is shown
                    transform: props.show ? 'translateY(1vh)' : 'translateY(-50vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                    {/* modal header */}
                <div className="modal-header"> 
                    <h3>CONTACT</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        salut c'est moi {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">SEND</button>
                </div>
            </div>
        </div>
    )
}

export default modal;