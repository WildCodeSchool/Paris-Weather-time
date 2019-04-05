import React from "react";

import './Footer.css';

class Footer extends React.Component{
    render(){
        return ( 
            <div>
                <div className = "Footer-container-2">
                    <div className="Copyright-bloc"><p>@2019 - TheWeatherTime</p></div>
                    <div className="Social-networks">
                        <a href="#"><img src="https://i.ibb.co/pxJ3WFf/icon-insta.png" alt="icon instagram"/></a>
                        <a href="#"><img src="https://i.ibb.co/HCY9VFh/icon-twitter.png" alt="icon twitter"/></a>
                        <a href="#"><img src="https://i.ibb.co/YPN0xMC/icons8-facebook-35.png" alt="icon facebook"/></a>
                        <a href="#"><img src="https://i.ibb.co/jgkCLb3/icons8-secured-letter-35.png" alt="icon contact"/></a>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Footer;