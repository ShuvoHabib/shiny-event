import {FETCH_EVENTS_PENDING, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR} from './../actions/action';

const initialState = {
    pending: false,
    data: [],
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
                data: action.data
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
    return state.events.data
};
export const getEventsPending = state => state.events.pending;
export const getEventsError = state => state.events.error;