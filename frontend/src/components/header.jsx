import React from "react";
import logo from '../images/logo.png';
import { openModal } from "../actions/modal_actions";
import { logout } from "../actions/session_actions"
import { connect } from "react-redux";
import SearchBarContainer from "./search/search_bar_container";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { openModal, logout } = props;

  const getSessionLink = (loggedIn = null) => {
    if (loggedIn) {
      return <button onClick={() => logout()} className="header__sign-in">Sign Out</button>
    } else {
      return <button onClick={() => openModal({type: 'login'})} className="header__sign-in">Sign in</button>
    }
  }

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" >
        <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <SearchBarContainer />
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