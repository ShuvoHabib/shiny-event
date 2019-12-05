import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import events from './reducer';
export default combineReducers({
    eventReducer,
    events
});