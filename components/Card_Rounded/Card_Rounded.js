import React from 'react';
import styles from './Card_Rounded.module.css';
import Image from 'next/image';

const Card_Rounded = () => {
  return (
    <figure className="image is-128x128 mx-auto my-0">
      <Image className="is-rounded"
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder image"
        height={256}
        width={256}
      />
    </figure>
  );
};

export default Card_Rounded;
