import { combineReducers } from 'redux';
import commentsReducer from './comments_reducer'
import postsReducer from './posts_reducer';


const entitiesReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
});


export default entitiesReducer;