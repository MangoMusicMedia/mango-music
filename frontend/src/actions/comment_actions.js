import * as CommentApiUtil from "../util/comment_api_util";


export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS"
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS"


// regular action creators
export const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
};

export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
};

export const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
};

export const receiveCommentErrors = (errors) => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors
    }
};

export const clearCommentErrors = () => {
    return {
        type: CLEAR_COMMENT_ERRORS
    }
};


// thunk action creators

export const fetchComments = (postId) => (dispatch) => {
    return CommentApiUtil.fetchComments(postId)
        .then(
            comments => dispatch(receiveComments(comments)),
            err => dispatch(receiveCommentErrors(err.response.data))
        )
};

export const fetchComment = (postId, commentId) => (dispatch) => {
    return CommentApiUtil.fetchComment(postId, commentId)
        .then(
            comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveCommentErrors(err.response.data))
        )
};

export const createComment = (postId, data) => (dispatch) => {
    return CommentApiUtil.createComment(postId, data)
        .then(
            comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveCommentErrors(err.response.data))
        )
};

export const editComment = (postId, commentId, data) => (dispatch) => {
    return CommentApiUtil.editComment(postId, commentId, data)
        .then(
            comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveCommentErrors(err.response.data))
        )
};

export const deleteComment = (postId, commentId) => (dispatch) => {
    return CommentApiUtil.deleteComment(postId, commentId)
        .then(
            () => dispatch(removeComment(commentId)),
            err => dispatch(receiveCommentErrors(err.response.data))
        )
};



