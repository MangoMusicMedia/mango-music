import { connect } from "react-redux";
import { signup, login, removeErrors } from '../../actions/session_actions';
import SignUpForm from './signup';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => ({
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);