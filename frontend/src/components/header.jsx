import React from "react";
import logo from '../images/logo.png';
import { openModal } from "../actions/modal_actions";
import { logout } from "../actions/session_actions"
import { connect } from "react-redux";

const Header = (props) => {
  const { openModal, logout } = props;

  const getSessionLink = (loggedIn = null) => {
    if (loggedIn) {
      return <button onClick={() => logout()} className="header__sign-in">Sign Out</button>
    } else {
      return <button onClick={() => openModal('login')} className="header__sign-in">Sign in</button>
    }
  }

  return (
    <header className="header">
      <div className="header__inner">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__search-wrapper">
          <input className="header__search-input" placeholder="Search for anything"></input>
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" /></svg>
        </div>
        {getSessionLink(props.loggedIn)}
      </div>
    </header>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);