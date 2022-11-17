import React from 'react';
import Column from '../Column/Column';
import styles from '../Grid/Grid.module.css';

const Grid = () => {
  return (
    <div className={`is-widescreen my-6 ${styles['containercolumn']}`}>
      <Column></Column>
      <Column></Column>
      <Column></Column>
      <Column></Column>
    </div>
  );
};

export default Grid;
