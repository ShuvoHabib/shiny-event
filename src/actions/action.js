export const FETCH_EVENTS_PENDING = 'FETCH_EVENTS_PENDING';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';

export function fetchEventsPending() {
    return {
        type: FETCH_EVENTS_PENDING
    }
}

export function fetchEventsSuccess(products) {
    return {
        type: FETCH_EVENTS_SUCCESS,
        products: products
    }
}

export function fetchEventsError(error) {
    return {
        type: FETCH_EVENTS_ERROR,
        error: error
    }
}
