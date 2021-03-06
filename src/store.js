import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import * as actions from "./actions/action";

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'appName',
            actionCreators: actions,
            trace: true
        })
        : compose;
export default function configureStore(initialState={}) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    );
}