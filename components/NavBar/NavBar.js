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
    <div className="navbar-brand">
      <Link className="navbar-item" href="/">
        <Image
          src="/assets/logo.svg"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width={112}
          height={28}
        />
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
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <Link
            className="navbar-link"
            href="https://bulma.io/documentation/overview/start/"
          >
            Proyectos
          </Link>
          <div className="navbar-dropdown is-boxed">
            <Link
              className="navbar-item"
              href="https://bulma.io/documentation/overview/start/"
            >
              Overview
            </Link>
            <Link
              className="navbar-item"
              href="https://bulma.io/documentation/overview/modifiers/"
            >
              Modifiers
            </Link>
            <Link
              className="navbar-item"
              href="https://bulma.io/documentation/columns/basics/"
            >
              Columns
            </Link>
          </div>
        </div>
        <Link className="navbar-item" href="https://bulma.io/">
          Nosotros
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
