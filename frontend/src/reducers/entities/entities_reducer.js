import { combineReducers } from 'redux';
import commentsReducer from './comments_reducer'


const entitiesReducer = combineReducers({
    comments: commentsReducer
});


export default entitiesReducer;