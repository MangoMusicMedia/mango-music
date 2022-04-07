import axios from "axios";

export const fetchPostIndex = () => {
  return axios.get('/api/posts/')
}

export const fetchPostsByUser = (authorId) => {
  return axios.get(`/api/posts/author/${authorId}`)
}

export const fetchLikedPostsbyUser = (authorId) => {
  return axios.get(`api/posts/${authorId}/likedPosts`)
}

export const fetchPost = (postId) => {
  return axios.get(`/api/posts/${postId}`)
}

export const createPost = (postData) => {
  return axios.post(`/api/posts/`, postData)
}

export const updatePost = (postData) => {
  return axios.patch(`/api/posts/${postData.id}`, postData)
}

export const deletePost = (postId) => {
  return axios.delete(`/api/posts/${postId}`)
}