import React from "react";
import logo from '../../images/logo.png';

const Header = props => {
  return (
    <header className="header">
      <div className="header__inner">
        <img className="header__logo" src={logo}/>
        <button className="header__sign-in">Sign in</button>
      </div>
    </header>
  );
}

export default Header;