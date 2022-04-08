import { connect } from "react-redux";
import React from "react";
import { login, removeErrors } from "../../actions/session_actions";
import LoginForm from './login';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => ({
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors()),
  registerButton: <button className="register-button" onClick={() => dispatch(openModal({type: 'signup'}))}>Sign Up</button>,
  closeModal: () => dispatch(closeModal()),
  troubleLink: <button className="trouble-signing-in" onClick={() => dispatch(openModal({type: 'trouble'}))}>Trouble signing in?</button>
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);