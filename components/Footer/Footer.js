import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`footer ${styles['footercom']}`}>
      <nav className={`navbar ${styles['footercontent']}`}>
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <Link href="http://localhost:3000/">
              <Image
                src="/assets/logo.svg"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width={112}
                height={28}
              />
            </Link>
          </a>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className={`bd-tw-button button ${styles['footerbutton']}`}
                  >
                    <Link href="https://www.instagram.com/multimedia.umai/">
                      <Image
                        src="/assets/Instagram.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </a>
                </p>
                <p className="control">
                  <a
                    className={`bd-tw-button button ${styles['footerbutton']}`}
                  >
                    <Link href="https://www.youtube.com/multimediaumai">
                      <Image
                        src="/assets/YouTube.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </a>
                </p>
                <p className="control">
                  <a
                    className={`bd-tw-button button ${styles['footerbutton']}`}
                  >
                    <Link href="https://twitter.com/MultimediaUMAI">
                      <Image
                        src="/assets/Twitter.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
