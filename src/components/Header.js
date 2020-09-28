import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="logo">
      <Link to="/">
        <img className="logo__img" src="/imgs/startrip.png" />
        <p className="logo__txt">스타트립</p>
      </Link>
    </h1>
    <a className="searchIcon">
      <img className="searchIcon__img" src="/imgs/searchIcon.webp" />
    </a>
  </header>
);

export default Header;
