import {FETCH_EVENTS_PENDING, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR} from './../actions/action';

const initialState = {
    pending: false,
    products: [],
    error: null
}

export default function events(state = initialState, action) {
    switch(action.type) {
        case FETCH_EVENTS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products
            };
        case FETCH_EVENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const getEvents = state => {
    return state.events.products
};
export const getEventsPending = state => state.events.pending;
export const getEventsError = state => state.events.error;