import { combineReducers } from 'redux';
// import session from './session_reducer';
import errorsReducer from './errors_reducer';
import sessionApiReducer from './session_api_reducer';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
    session: sessionApiReducer,
    errors: errorsReducer,
    ui: UIReducer
});

export default RootReducer;