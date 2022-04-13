// import { FOLLOW, RECEIVE_FOLLOWERS, UNFOLLOW } from "../../actions/follower_actions"

// const followersReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
//   const nextState = Object.assign({}, oldState);
  
//   switch (action.type) {
//     case FOLLOW:
//       nextState[action.follower.id] = action.follower;
//       return nextState;
//     case RECEIVE_FOLLOWERS:
//       return Object.assign(nextState, action.followers);
//     case UNFOLLOW:
//       delete nextState[action.follower.id];
//       return nextState;
//     default:
//       return oldState;
//   }
// }

// export default followersReducer;