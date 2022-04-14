import { combineReducers } from 'redux';
import commentsReducer from './comments_reducer'
import postsReducer from './posts_reducer';

// import likesReducer from './likes_reducer';
import usersReducer from './users_reducer'
// import followersReducer from './followers_reducer';

const entitiesReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    // likes: likesReducer,
    users: usersReducer,
    // followers: followersReducer
});


export default entitiesReducer;