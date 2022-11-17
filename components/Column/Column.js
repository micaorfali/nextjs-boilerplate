import React from 'react';
import Card from '../Card/Card';
import styles from '../Column/Column.module.css';

const Column = () => {
  return (
    <div className={`columns is-variable ${styles['containercolumn']}`}>
      <div className={`column is-4 ${styles['columnind']}`}>
        <Card></Card>
      </div>
      <div className={`column is-4 ${styles['columnind']}`}>
        <Card></Card>
      </div>
      <div className={`column is-4 ${styles['columnind']}`}>
        <Card></Card>
      </div>
    </div>
  );
};

export default Column;
