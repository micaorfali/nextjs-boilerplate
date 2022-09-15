import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav
    className={`navbar is-black is-fixed-top ${styles['container']}`}
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand pl-6">
      <Link href="/index">
        <a className="navbar-item py-5">
          <Image
            src="/assets/logo.svg"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width={124}
            height={40}
          />
        </a>
      </Link>
    </div>
    <div
      className="navbar-burger"
      data-target="navbarExampleTransparentExample"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-end pr-6">
        <Link href="/disenio">
          <a className="navbar-item has-text-weight-bold">Programación</a>
        </Link>
        <Link href="/programacion">
          <a className="navbar-item has-text-weight-bold">Diseño</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
