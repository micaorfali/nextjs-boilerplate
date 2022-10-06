import React from 'react';
import styles from '../Card_Rounded/Card_Rounded.module.css';
import Image from 'next/image';

const Card_Rounded = () => {
  const nombres = [
    "Sofía Bonavena", "Giuliano Giovanola", "Nayla Arollo", "Micaela Fernandez", "Alexia Bejarano", "Micaela Orfali"
  ];
  const fotosPerfil = [];

  return (
    <div className={`image mx-auto my-0 ${styles['container']}`}>
      <Image
        className="is-rounded"
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder image"
        height={256}
        width={256}
      />
      <div className={`is-rounded ${styles['middle']}`}>
      <div className={`${styles['text']}`}>Micaela</div>
        <div className={`${styles['text2']}`}>Desarrolladora</div>
      </div>
    </div>
  );
};

export default Card_Rounded;
/*
<div className={`image mx-auto my-0 ${styles['container']}`}>
      <Image
        className="is-rounded"
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder image"
        height={256}
        width={256}
      />
      <div className={`is-rounded ${styles['middle']}`}>
      {nombres.map((n,index) => <div className={`${styles['text']} key={index}`}>{n}</div>)}
        <div className={`${styles['text2']}`}>Desarrolladora</div>
      </div>
    </div>
*/
/* 
<Grid rowGap={30} colGap={20}>
{metodos.map((m, index) =>
    <Col desktop={3} tablet={6} mobile={12} key={index}>
        <img  className="box" src={`${process.env.PUBLIC_URL}/assets/image/${m}`} width={150} alt="mediodepago"/>
    </Col> )}
*/