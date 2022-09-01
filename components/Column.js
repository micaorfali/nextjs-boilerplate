import React from 'react';
import Card from './Card';

const Column = () => {
  return (
    <div className="columns is-variable">
      <div className="column is-3">
        <Card></Card>
      </div>
      <div className="column is-3">
        <Card></Card>
      </div>
      <div className="column is-3">
        <Card></Card>
      </div>
      <div className="column is-3">
        <Card></Card>
      </div>
    </div>
  );
};

export default Column;
