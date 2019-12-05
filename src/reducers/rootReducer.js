import { combineReducers } from 'redux';
import members from './memberReducer';
import events from './reducer';
export default combineReducers({
	members,
    events
});