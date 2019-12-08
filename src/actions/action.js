export const FETCH_EVENTS_PENDING = 'FETCH_EVENTS_PENDING';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';
export const FETCH_MEMBERS_PENDING = 'FETCH_MEMBERS_PENDING';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';
export const FETCH_MEMBERS_ERROR = 'FETCH_MEMBERS_ERROR';
export const ADD_EVENT = 'ADD_EVENT';

export function fetchEventsPending() {
    return {
        type: FETCH_EVENTS_PENDING
    }
}

export function fetchEventsSuccess(data) {
    return {
        type: FETCH_EVENTS_SUCCESS,
        data: data
    }
}

export function addEvent(id) {
    return {
        type: ADD_EVENT,
        event: id
    }
}

export function fetchEventsError(error) {
    return {
        type: FETCH_EVENTS_ERROR,
        error: error
    }
}

export function fetchMembersPending() {
	return {
		type: FETCH_MEMBERS_PENDING
	}
}

export function fetchMembersSuccess(data) {
	return {
		type: FETCH_MEMBERS_SUCCESS,
		data: data
	}
}

export function fetchMembersError(error) {
	return {
		type: FETCH_MEMBERS_ERROR,
		error: error
	}
}
