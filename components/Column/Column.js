import React from 'react';
import Card from '../Card/Card';

const Column = () => {
  return (
    <div className="columns is-variable">
      <div className="column is-4">
        <Card></Card>
      </div>
      <div className="column is-4">
        <Card></Card>
      </div>
      <div className="column is-4">
        <Card></Card>
      </div>
    </div>
  );
};

export default Column;
