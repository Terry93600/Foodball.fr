import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
import logo from '../../assets/logo/logo.png'


const Header = () => {

  return (
    
<nav id='header'>
    <a href="/" class="logo">
      <img src={logo} />
      <Link to="/"></Link>
    </a>  
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </label>
    <ul class="nav-links">
        <li><Link to="/restaurants">Restaurant</Link></li>
        <li><Link to="/restaurants">Date Importante</Link></li>
        <li><Link to="/restaurants">Connexion</Link></li>
    </ul>
</nav>
    
  );
};

export default Header;
