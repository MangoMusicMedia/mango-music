import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT } from "../../actions/comment_actions";


const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_COMMENTS:
            action.comments.data.forEach(comment => {
                newState[comment._id] = comment;
            })
            console.log(newState)
            // console.log(newState);
            return newState;
        // case RECEIVE_COMMENT:

        // case REMOVE_COMMENT:

        default:
            return oldState
    }
}


export default commentsReducer;