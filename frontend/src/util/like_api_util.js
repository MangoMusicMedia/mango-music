import axios from "axios";

// export const fetchLikes = (postId) => {
//     return axios.get(`/api/likes/posts/${postId}`)
// };

// export const fetchLike = (likeId) => {
//     return axios.get(`/api/likes/${likeId}`)
// };

export const createLike = (userId, postId) => {
    return axios.post(`/api/likes/${userId}/posts/${postId}`)
};

export const deleteLike = (userId, postId) => {
    return axios.delete(`/api/likes/${userId}/posts/${postId}`)
};