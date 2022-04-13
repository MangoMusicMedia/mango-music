import * as FollowerAPIUtil from '../util/follower_api_util';

export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
// export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const RECEIVE_FOLLOWER_ERRORS = 'RECEIVE_FOLLOWER_ERRORS';

export const receiveFollowers = user => ({
  type: RECEIVE_FOLLOWERS,
  user
})

// export const receiveFollower = follower => ({
//   type: FOLLOW,
//   follower
// })

// export const removeFollower = follower => ({
//   type: UNFOLLOW,
//   follower
// })

// export const receiveFollowerErrors = errors => ({
//   type: RECEIVE_FOLLOWER_ERRORS,
//   errors
// })

// export const requestFollowers = () => dispatch => (
//   FollowerAPIUtil.fetchFollowers()
//     .then(user => dispatch(receiveFollowers(user)))
//     // .fail(err => dispatch(receiveFollowerErrors(err)))
// )

// export const requestFollower = (userId, followerId) => dispatch => (
//   FollowerAPIUtil.fetchFollower(userId, followerId)
//     .then(follower => dispatch(receiveFollower(follower)))
//     // .fail(err => dispatch(receiveFollowerErrors(err)))
// )

export const createFollower = (userId, followerId) => dispatch => (
  FollowerAPIUtil.createFollower(userId, followerId)
    .then((follower) => dispatch(receiveFollowers(follower.data)))
    // .fail(err => dispatch(receiveFollowerErrors(err)))
)

export const deleteFollower = (userId, followerId) => dispatch => (
  FollowerAPIUtil.deleteFollower(userId, followerId)
    .then(follower => dispatch(receiveFollowers(follower.data)))
    // .fail(err => dispatch(receiveFollowerErrors(err)))
)