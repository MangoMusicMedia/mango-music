import {
  FETCH_ALL_POSTS,
  FETCH_POSTS_BY_USER,
  FETCH_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST
} from '../../actions/post_actions'
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_COMMENT:
      Object.values(newState)[0].comments.push(action.comment)
      return newState;
    case REMOVE_COMMENT:
      let arr = Object.values(newState)[0].comments
        for( var i = 0; i < arr.length; i++){
          if (arr[i]._id === action.commentId) {
            arr.splice(i, 1);
        }
      }
      return newState;
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
    default:
      return oldState;
  }
}

export default postsReducer;