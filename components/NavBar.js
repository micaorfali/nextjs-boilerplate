import React from 'react';

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
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
      <div className="navbar-start">
        <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>
        <a className="navbar-item" href="https://bulma.io/">
          Trabajos
        </a>
        <a className="navbar-item" href="https://bulma.io/">
          Nosotros
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
