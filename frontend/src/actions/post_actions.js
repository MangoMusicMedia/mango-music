import * as PostAPIUtil from '../util/post_api_util'
import { receiveErrors } from './session_actions';

export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
export const FETCH_POSTS_BY_USER = "FETCH_POSTS_BY_USER";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";

const fetchPostsAction = (posts) => {
  return {
    type: FETCH_ALL_POSTS,
    posts
  }
}

const fetchPostsByUserAction = (posts) => {
  return {
    type: FETCH_POSTS_BY_USER,
    posts
  }
}

const fetchPostAction = (post) => {
  return {
    type: FETCH_POST,
    post
  }
}

const createPostAction = (post) => {
  return {
    type: CREATE_POST,
    post
  }
}

const updatePostAction = (post) => {
  return {
    type: UPDATE_POST,
    post
  }
}

const deletePostAction = (postId) => {
  return {
    type: DELETE_POST,
    postId
  }
}

export const receiveUserPosts = user => ({
  type: RECEIVE_USER_POSTS,
  user
})

export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchPostIndex()
    .then((posts) => dispatch(fetchPostsAction(posts.data)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const fetchPostsByUser = (authorId) => dispatch => {
  return PostAPIUtil.fetchPostsByUser(authorId)
    .then((posts) => dispatch(fetchPostsByUserAction(posts.data)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const fetchLikedPostsbyUser = (authorId) => dispatch => {
  return PostAPIUtil.fetchLikedPostsbyUser(authorId)
    .then((posts) => dispatch(fetchPostsAction(posts.data)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const fetchPost = (postId) => dispatch => {
  return PostAPIUtil.fetchPost(postId)
    .then((post) => dispatch(fetchPostAction(post.data)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const createPost = (postData) => dispatch => {
  return PostAPIUtil.createPost(postData)
    .then((res) => {
      dispatch(receiveUserPosts(res.data.user))
      dispatch(createPostAction(res.data.post))
    })
    .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const updatePost = (postData) => dispatch => {
  return PostAPIUtil.updatePost(postData)
    .then((res) => {
      dispatch(receiveUserPosts(res.data.user))
      dispatch(updatePostAction(res.data.post))
    })
    .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const deletePost = (postId) => dispatch => {
  return PostAPIUtil.deletePost(postId)
    .then((res) => {
      dispatch(receiveUserPosts(res.data.user))
      dispatch(deletePostAction(postId))
    })
    .catch(err => dispatch(receiveErrors(err.response.data)))
}