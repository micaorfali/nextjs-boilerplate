import React from 'react';
import Image from 'next/image';

const Lightbox = () => {
  <div className="modal">
    <div className="modal-background"></div>
    <div className="modal-content">
      <Image
        src="/assets/logo.svg"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width={124}
        height={40}
      />
      <div className="Content">
        <h1>Sofia Bonavena</h1>
        <p>Diseño UI - 3er año - 2021</p>
      </div>
    </div>
    <button className="modal-close is-large" aria-label="close"></button>
  </div>;
};

export default Lightbox;
