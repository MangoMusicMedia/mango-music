import React from "react";
import logo from '../../images/logo.png';
import { openModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

const Header = ({ openModal }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <img className="header__logo" src={logo}/>
        <button onClick={() => openModal('login')} className="header__sign-in">Sign in</button>
      </div>
    </header>
  );
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mapDispatchToProps)(Header);