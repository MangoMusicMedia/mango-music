import * as LikeApiUtil from "../util/like_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


// regular action creators

export const receiveAllLikes = (post) => {
    return {
        type: RECEIVE_ALL_LIKES,
        post
    }
};

// export const receiveLike = (like) => {
//     return {
//         type: RECEIVE_LIKE,
//         like
//     }
// };

// export const removeLike = (likeId) => {
//     return {
//         type: REMOVE_LIKE,
//         likeId
//     }
// };


// // thunk action creators

// export const fetchLikes = (postId) => (dispatch) => {
//     return LikeApiUtil.fetchLikes(postId)
//         .then(
//             likes => dispatch(receiveAllLikes(likes.data)),
//             err => dispatch(receiveErrors(err.response.data))
//         )
// };

// export const fetchLike = (likeId) => (dispatch) => {
//     return LikeApiUtil.fetchLike(likeId)
//         .then(
//             like => dispatch(receiveLike(like.data)),
//             err => dispatch(receiveErrors(err.response.data))
//         )
// };

export const createLike = (userId, postId) => (dispatch) => {
    return LikeApiUtil.createLike(userId, postId)
        .then(
            post => dispatch(receiveAllLikes(post.data)),
            err => dispatch(receiveErrors(err.response.data))
        )
};

export const deleteLike = (postId, likeId) => (dispatch) => {
    return LikeApiUtil.deleteLike(postId, likeId)
        .then(
            () => dispatch(receiveAllLikes(likeId)),
            err => dispatch(receiveErrors(err.response.data))
        )
};