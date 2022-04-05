import React from "react";
import { closeModal } from '../../actions/modal_actions';
import { connect } from "react-redux";
import { useState } from "react";

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
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'forgot':
      component = <ForgotPasswordContainer />;
      break;
    case 'trouble':
      component = <TroubleModalContainer />;
      break;
    case 'checkout':
      component = <CheckoutModalContainer />;
      break;
    case 'help':
      component = <HelpModalContainer />;
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


const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

