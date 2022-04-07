import { combineReducers } from 'redux';
import commentsReducer from './comments_reducer'
import postsReducer from './posts_reducer';
import likesReducer from './likes_reducer';


const entitiesReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer
});


export default entitiesReducer;