import axios from "axios";

export const fetchFollowers = (userId) => {
  return axios.get(`api/users/${userId}/followers`)
}

export const fetchFollower = (userId, followerId) => {
  return axios.get(`api/users/${userId}/followers/${followerId}`)
}

export const createFollower = (follower, userId) => {
  return axios.post(`api/users/${userId}/followers`, follower)
}

export const deleteFollower = (userId, followerId) => {
  return axios.delete(`/api/users/${userId}/followers/${followerId}`)
}
