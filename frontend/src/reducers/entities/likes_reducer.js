// import {
//     RECEIVE_ALL_LIKES,
//     RECEIVE_LIKE,
//     REMOVE_LIKE
// } from "../../actions/like_actions";


// const likesReducer = (oldState = {}, action) => {
//     Object.freeze(oldState)
//     let newState = Object.assign({}, oldState)

//     switch (action.type) {
//         case RECEIVE_ALL_LIKES:
//             action.likes.forEach(like => {
//                 newState[like._id] = like;
//             })
//             return newState;
//         case RECEIVE_LIKE:
//             newState[action.like._id] = action.like;
//             return newState;
//         case REMOVE_LIKE:
//             delete newState[action.likeId]
//             return newState;
//         default:
//             return oldState;
//     }
// };


// export default likesReducer;