
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';


export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user: user.data
  }
}

const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users: users.data
});

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveUsers(users)))
}

export const requestUser = (userId) => dispatch => {
  return UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
}

export const updateUserProfile = (userData) => dispatch => {
  return UserAPIUtil.editUserProfile(userData)
    .then(user => dispatch(receiveUser(user)))
}
