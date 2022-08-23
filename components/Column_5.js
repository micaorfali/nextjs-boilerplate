import React from 'react';
import Card from './Card';

const Column_5 = () => {
  return (
    <div className="container is-widescreen my-6">
      <div className="columns is-multiline is-justify-content-center">
        <div className="column is-one-third">
          <Card></Card>
        </div>
        <div className="column is-one-third">
          <Card></Card>
        </div>
        <div className="column is-one-third">
          <Card></Card>
        </div>
        <div className="column is-one-third">
          <Card></Card>
        </div>
        <div className="column is-one-third">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Column_5;
