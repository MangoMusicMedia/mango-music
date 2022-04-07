import axios from "axios";


export const fetchComments = (postId) => {
    return axios.get(`/api/posts/${postId}/comments`)
};

export const fetchComment = (postId, commentId) => {
    return axios.get(`/api/posts/${postId}/comments/${commentId}`)
};

export const createComment = (postId, data) => {
    return axios.post(`api/posts/${postId}`, data)
};


export const editComment = (postId, commentId, data) => {
    return axios.patch(`/api/posts/${postId}/comments/${commentId}`, data)
};


export const deleteComment = (postId, commentId) => {
    return axios.delete(`/api/posts/${postId}/comments/${commentId}`, commentId)
};