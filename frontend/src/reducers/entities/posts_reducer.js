import {
  FETCH_ALL_POSTS,
  FETCH_POSTS_BY_USER,
  FETCH_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST
} from '../../actions/post_actions'
import {
  RECEIVE_ALL_LIKES,
} from "../../actions/like_actions";


const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case FETCH_ALL_POSTS:
      action.posts.forEach(post => {
        newState[post._id] = post;
      })
      return newState;
    case FETCH_POSTS_BY_USER:
      Object.values(action.posts).forEach((post) => {
        if (!newState[post._id]) {
          newState[post._id] = post
        }
      })
      return newState;
    case FETCH_POST:
    case CREATE_POST:
    case UPDATE_POST:
      newState[action.post._id] = action.post
      return newState;
    case DELETE_POST:
      delete newState[action.postId]
      return newState;
    case RECEIVE_ALL_LIKES:
      newState[action.post._id] = action.post
      debugger;
      return newState;
    default:
      return oldState;
  }
}

export default postsReducer;