import React from 'react';
import Column from './Column';

const Grid = () => {
  return (
    <div className="container is-widescreen my-6">
      <Column></Column>
      <Column></Column>
      <Column></Column>
      <Column></Column>
    </div>
  );
};

export default Grid;
