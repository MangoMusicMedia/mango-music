import { RECEIVE_USER } from "../../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return oldState;
  }
};

export default usersReducer;