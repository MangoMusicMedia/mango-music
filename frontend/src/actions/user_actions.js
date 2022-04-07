
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'


export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user: user.data
  }
}

export const requestUser = (userId) => dispatch => {
  return UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
}
