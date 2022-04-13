import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../../actions/user_actions";
import { RECEIVE_FOLLOWERS } from "../../actions/follower_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_USER:
      newState[action.user._id] = action.user
      return newState;
    case RECEIVE_ALL_USERS:
      action.users.forEach(user => {
        newState[user._id] = user;
      })
      return newState;
    case RECEIVE_FOLLOWERS:
      newState[action.user._id] = action.user
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;