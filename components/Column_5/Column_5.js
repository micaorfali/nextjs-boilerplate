import React from 'react';
import Card_Rounded from '../Card_Rounded/Card_Rounded';

const Column_5 = () => {
  return (
    <div className="container is-widescreen my-6">
      <div className="columns is-multiline is-justify-content-center">
        <div className="column is-one-third">
          <Card_Rounded></Card_Rounded>
        </div>
        <div className="column is-one-third">
          <Card_Rounded></Card_Rounded>
        </div>
        <div className="column is-one-third">
          <Card_Rounded></Card_Rounded>
        </div>
        <div className="column is-one-third">
          <Card_Rounded></Card_Rounded>
        </div>
        <div className="column is-one-third">
          <Card_Rounded></Card_Rounded>
        </div>
      </div>
    </div>
  );
};

export default Column_5;
