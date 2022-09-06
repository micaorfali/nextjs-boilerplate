import React from 'react';
import styles from '../Hero_2/Hero_2.module.css';

const Hero = () => {
  return (
    <section className={`hero is-large ${styles['container']}`}>
      <div className="hero-body">
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <p className={`${styles['text']}`}>
              En esta web encontrarás proyectos realizados por estudiantes de
              UMAI de la carrera de Tecnología Multimedial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
