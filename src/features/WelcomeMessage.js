import React from 'react';
import node_logo from '../logo-hexagon.svg';

const WelcomeMessage = ()=>{
  return (<div className="welcome">
  <div className="welcome-container">
    <h1> Bienvenido a nodeco </h1>
    <img src={node_logo} className="node-logo" alt="node logo" />
    <p> Somos un grupo de personas apasionadas por el desarrollo de software
con nodejs que queremos compartir nuestro conocimiento o aprender juntos acerca de este maravilloso lenguaje del lado del backend y por qué no, para otras soluciones.</p>
    <p>Estamos trabajando en nuestro nuevo sitio web! mientras esperas puedes visitar nuestro sitio en meetup</p>
    <a className="btn btn-centered" rel="noopener noreferrer" target="_blank" href="https://www.meetup.com/node_co/">Ir al meetup</a>
  </div>
</div>);
};
export default WelcomeMessage;