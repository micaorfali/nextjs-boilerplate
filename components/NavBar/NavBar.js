import React from 'react';
import Image from 'next/image';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav
    className={`navbar is-black is-fixed-top ${styles['container']}`}
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand pl-6">
      <a className="navbar-item py-5" href="https://bulma.io">
        <Image
          src="/assets/logo.svg"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width={124}
          height={40}
        />
      </a>
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
        <div className="navbar-item has-dropdown is-hoverable">
          <a
            className="navbar-link"
            href="https://bulma.io/documentation/overview/start/"
          >
            Proyectos
          </a>
          <div className="navbar-dropdown is-boxed">
            <a
              className="navbar-item"
              href="https://bulma.io/documentation/overview/start/"
            >
              Overview
            </a>
            <a
              className="navbar-item"
              href="https://bulma.io/documentation/overview/modifiers/"
            >
              Modifiers
            </a>
            <a
              className="navbar-item"
              href="https://bulma.io/documentation/columns/basics/"
            >
              Columns
            </a>
          </div>
        </div>
        <a className="navbar-item" href="https://bulma.io/">
          Nosotros
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
