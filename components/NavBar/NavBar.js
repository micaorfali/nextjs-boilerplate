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
      <a className="navbar-item" href="https://bulma.io">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width={112}
            height={28}
          />
        </Link>
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
      <div className="navbar-end">
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
