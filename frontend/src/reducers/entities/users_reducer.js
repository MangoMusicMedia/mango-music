import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../../actions/user_actions";
import { RECEIVE_FOLLOWERS } from "../../actions/follower_actions";
import { RECEIVE_USER_POSTS } from "../../actions/post_actions"

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_FOLLOWERS:
    case RECEIVE_USER_POSTS:
      newState[action.user._id] = action.user
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