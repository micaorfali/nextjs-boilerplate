import React from 'react';
import styles from './Card_Rounded.module.css';
import Image from 'next/image';

const Card_Rounded = () => {
  return (
    <div className={`card ${styles['container']}`}>
      <div className="card-image">
        <figure className="image">
          <Image
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
            height={1280}
            width={960}
          />
        </figure>
      </div>
    </div>
  );
};

export default Card_Rounded;
