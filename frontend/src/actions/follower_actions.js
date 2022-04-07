import * as FollowerAPIUtil from '../util/follower_api_util';

export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const RECEIVE_FOLLOWER_ERRORS = 'RECEIVE_FOLLOWER_ERRORS';

export const receiveFollowers = followers => ({
  type: RECEIVE_FOLLOWERS,
  followers
})

export const receiveFollower = follower => ({
  type: FOLLOW,
  follower
})

export const removeFollower = follower => ({
  type: UNFOLLOW,
  follower
})

export const receiveFollowerErrors = errors => ({
  type: RECEIVE_FOLLOWER_ERRORS,
  errors
})

export const requestFollowers = () => dispatch => (
  FollowerAPIUtil.fetchFollowers()
    .then(followers => dispatch(receiveFollowers(followers)))
    .fail(err => dispatch(receiveFollowerErrors(err)))
)

export const requestFollower = (userId, followerId) => dispatch => (
  FollowerAPIUtil.fetchFollower(userId, followerId)
    .then(follower => dispatch(receiveFollower(follower)))
    .fail(err => dispatch(receiveFollowerErrors(err)))
)

export const createFollower = (follower, userId) => dispatch => (
  FollowerAPIUtil.createFollower(follower, userId)
    .then(follower => dispatch(receiveFollower(follower)))
    .fail(err => dispatch(receiveFollowerErrors(err)))
)

export const deleteFollower = (userId, followerId) => dispatch => (
  FollowerAPIUtil.deleteFollower(userId, followerId)
    .then(follower => dispatch(removeFollower(follower)))
    .fail(err => dispatch(receiveFollowerErrors(err)))
)