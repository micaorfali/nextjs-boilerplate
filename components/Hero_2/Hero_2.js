import React from 'react';
import styles from '../Hero_2/Hero_2.module.css';

const Hero = () => {
  return (
    <section>
      {/* Este HERO se ve en DESKTOP */}
      <div className={`${styles['hero-containerdesktop']}`}> 
        <div className={`hero is-large ${styles['container1']}`}>
          <div className="hero-body">
            <div className="columns is-variable">
             <div className="column"></div>
              <div className="column">
                <p className={`${styles['textdesktop']}`}>
                  En esta web encontrarás proyectos realizados por estudiantes de UMAI de la carrera de Tecnología Multimedial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Este hero se ve en MOBILE*/}
      <div className={`${styles['hero-containermobile']}`}>
        <div className="hero-body">
          <div className="columns is-variable">
            <div className="column"></div>
            <div className="column">
              <p className={`${styles['textmobile']}`}>
                En esta web encontrarás proyectos realizados por estudiantes de UMAI de la carrera de Tecnología Multimedial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


