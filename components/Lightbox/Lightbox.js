import React from 'react';
import styles from './Lightbox.module.css';
import Image from 'next/image';

const Lightbox = ({ stateModal }) => {
  let className = '';

  if (stateModal) {
    className = 'modal is-active';
  } else {
    className = 'modal';
  }
  return (
    <div className={className}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <Image
            src="/assets/logo.svg"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width={124}
            height={40}
          />
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <div className="Content">
            <div>
              <figure className={`${styles['figurecontainer']}`}>
                <Image
                  src="/assets/hero.png"
                  alt="Placeholder image"
                  width={1200}
                  height={900}
                />
              </figure>
            </div>
            <div className="has-text-centered">
              <h1>Sofia Bonavena</h1>
              <p>Diseño UI - 3er año - 2021</p>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot"></footer>
      </div>
    </div>
  );
};

export default Lightbox;
