import axios from "axios";

export const fetchFollowers = (userId) => {
  return axios.get(`api/users/${userId}/followers`)
}

export const fetchFollower = (userId, followerId) => {
  return axios.get(`api/users/${userId}/followers/${followerId}`)
}

export const createFollower = (userId, followerId) => {
  return axios.post(`api/users/${userId}/followers`, {followerId: followerId})
}

export const deleteFollower = (userId, followerId) => {
  return axios.delete(`/api/users/${userId}/followers/${followerId}`)
}
