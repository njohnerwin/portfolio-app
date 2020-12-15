import React from 'react';
import ProfilePic from '../chicken2.png';

function Header() {
  return(
    <div id="header">
      <a href="/"><img 
        src={ProfilePic} 
        alt=""
        className="profile-image" /></a>
      <h1>NICHOLAS ERWIN</h1>
      <h2>Portfolio - UCONN Full-stack Coding Bootcamp 2020</h2>
      <div id="header-links">
        <a href="https://github.com/njohnerwin"> {">"} Github </a>
        <a href="https://www.linkedin.com/in/nicholas-erwin-661617167/"> {">"} LinkedIn </a>
      </div>
    </div>
  );
}

export default Header;