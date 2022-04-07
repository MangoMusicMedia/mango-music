import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_USER:
      return action.users;
    case RECEIVE_ALL_USERS:
      console.log('REDUCER', action.users);
      return action.users;
    default:
      return oldState;
  }
};

export default usersReducer;