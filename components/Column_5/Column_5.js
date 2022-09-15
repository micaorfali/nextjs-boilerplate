import React from 'react';
import Card_Rounded from '../Card_Rounded/Card_Rounded';
import styles from './Column_5.module.css';

const Column_5 = () => {
  return (
    <div className="container is-widescreen my-6">
      <div className="columns is-multiline is-justify-content-center">
        <div className={`column is-one-third ${styles['divrounded']}`}>
          <Card_Rounded></Card_Rounded>
        </div>
        <div className={`column is-one-third ${styles['divrounded']}`}>
          <Card_Rounded></Card_Rounded>
        </div>
        <div className={`column is-one-third ${styles['divrounded']}`}>
          <Card_Rounded></Card_Rounded>
        </div>
        <div className={`column is-one-third ${styles['divrounded']}`}>
          <Card_Rounded></Card_Rounded>
        </div>
        <div className={`column is-one-third ${styles['divrounded']}`}>
          <Card_Rounded></Card_Rounded>
        </div>
      </div>
    </div>
  );
};

export default Column_5;
