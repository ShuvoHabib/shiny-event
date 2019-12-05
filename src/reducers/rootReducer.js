import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import productsReducer from './reducer';
export default combineReducers({
    eventReducer,
    productsReducer
});