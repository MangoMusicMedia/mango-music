import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_USER:
      newState[action.users._id] = action.users;
      return newState;
    case RECEIVE_ALL_USERS:
      action.users.forEach(user => {
        newState[user._id] = user;
      })
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;