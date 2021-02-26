import React from 'react';
import icon from './assets/Icon.svg';
import './Card.css';

const Card = () => {
    return (
      <div className='container card'>
          <div className='col'>
          <img src={icon} alt='' /> Merke
          </div>
          <div className='col'>
          <p>Das Verfassen einer Facharbeit stellt eine Art Vorbereitung auf den Studienabschluss dar;
              nicht selten brauchen die angehenden Studenten und Studentinnen Hilfe,
              um sich nicht in den Mustern, denen sie folgen sollten, zu verlieren.</p>
          </div>
      </div>
    );
};

export default Card;
