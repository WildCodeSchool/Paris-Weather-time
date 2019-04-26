import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

// import './ShareSocial.css'


class ShareSocial extends React.Component {
    render() {
        return (
            <div>
                <nav className="menu">
                    {/* <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" /> */}
                    <label className="menu-open-button" for="menu-open">
                        <span className="lines line-1"></span>
                    
                        {/* <span className="lines line-2"></span> */}
                        
                        {/* <span className="lines line-3"></span> */}
                    
                    </label>
{/* 
                    <a href="#" className="menu-item blue"> <FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon></a>
                    <a href="#" className="menu-item green"> <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon></a>
                    <a href="#" className="menu-item red"> <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon> </a> */}
                    {/* <a href="#" className="menu-item orange"><FontAwesomeIcon icon={faPinterest} ></FontAwesomeIcon> </a> */}

                </nav>
            </div>
        )
    }
}
export default ShareSocial