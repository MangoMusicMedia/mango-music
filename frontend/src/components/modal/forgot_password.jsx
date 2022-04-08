import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { login } from "../../actions/session_actions";
import { connect } from "react-redux";

const ForgotPasswordModal = props => {

  const handleSubmitDemoUser = e => {
    e.preventDefault();
    const demoUser = {
      email: 'demouser@email.com',
      password: 'password123'
    }
    props.login(demoUser).then(props.closeModal);
  }

  return (
    <div className="forgot-pass">
      <h1>
        Forgot your password?
      </h1>

      <p>Please try signing in as a Demo user to access Mango Music's content.</p>

      <button onClick={handleSubmitDemoUser}>Continue with Demo User</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(ForgotPasswordModal);
