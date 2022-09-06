import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={`card ${styles['container']}`}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <span className={`tag ${styles['tagg']}`}>Programación</span>
            <p className={`title is-4 ${styles['title']}`}>John Smith</p>
          </div>
        </div>

        <div className={`content ${styles['text']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </div>
        <button className={`button ${styles['boton']}`}>VER</button>
      </div>
    </div>
  );
};

export default Card;
