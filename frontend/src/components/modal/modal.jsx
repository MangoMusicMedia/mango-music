import React from "react";
import { closeModal } from '../../actions/modal_actions';
import { connect } from "react-redux";
import { useState } from "react";
import SignupFormContainer from "../session/signup_container";
import LoginFormContainer from '../session/login_container';

const Modal = ({ modal, closeModal }) => {
  let [modalTransition, setModalTransition] = useState(false);

  const closeModalTransition = () => {
    setModalTransition(true)
    return setTimeout(() => {
      closeModal();
      setModalTransition(false)
    }, 200);
  }

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'login':
      component = <LoginFormContainer />;
      break;
    default:
      return null;
  }

  const transition = modalTransition ? "-reverse" : "";

  return (
    <div className={`modal-background${transition}`} onClick={closeModalTransition}>
      <div className={`modal-child${transition}`} onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}


const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

