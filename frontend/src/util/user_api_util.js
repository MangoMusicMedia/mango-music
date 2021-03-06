import axios from "axios";

export const fetchUser = userId => {
  return axios.get(`/api/users/${userId}`)
}

export const fetchAllUsers = () => {
  return axios.get('/api/users')
}

export const editUserProfile = (userData) => {
  return axios.patch(`api/users/${userData.id}`, userData)
}