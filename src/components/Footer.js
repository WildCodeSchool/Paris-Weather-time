import React from "react";

import './Footer.css';
//import ShareSocial from "./ShareSocial";

class Footer extends React.Component {

    render() {
        return (
            <div>
                <div className="Footer-container-2">
                    <div className="Copyright-bloc"><p>@2019 - TheWeatherTime</p></div>
                    {/*<ShareSocial />*/}
                </div>

            </div>
        )
    }
}

export default Footer;