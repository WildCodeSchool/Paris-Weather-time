 import React from 'react';
 import './Navbar.css';

 class Navbar extends React.Component {
render(){
    return(
        <div>
     <div class="header header-fixed">
        <div class="navbar container">
            <div class="logo"><a href="#home">LOGO</a></div>
            <input type="checkbox" id="navbar-toggle" />
            <label for="navbar-toggle"><i></i></label>
            <nav class="menu">
                <ul>
                    <li><a href="#home">Filter</a></li>
                    <li><a href="#about">Favorits</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>        
        </div>
    </div>
          
    </div>
       
 
 )
}

 }
 export default Navbar;