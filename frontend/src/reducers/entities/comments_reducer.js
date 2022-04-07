import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT } from "../../actions/comment_actions";


const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_COMMENTS:
            action.comments.forEach(comment => {
                newState[comment._id] = comment;
            })
            return newState;
        case RECEIVE_COMMENT:
            newState[action.comment._id] = action.comment;
            return newState
        case REMOVE_COMMENT:
            console.log('NEWSTATE', newState)
            console.log('ID', action.commentId);
            console.log('ACTION', action);
            delete newState[action.commentId];
            return newState;
        default:
            return oldState
    }
}


export default commentsReducer;