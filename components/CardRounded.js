import React from 'react';
import cardRoundedStyles from '../styles/Cardrounded.module.css';

const CardRounded = () => {
  return (
    <div>
      <figure className="image is-128x128">
        <img className="is-rounded" src="https://bulma.io/images/placeholders/1280x960.png"/>
      </figure>
    </div>
  );
};

export default CardRounded;
