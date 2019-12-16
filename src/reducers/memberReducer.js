import {
	FETCH_MEMBERS_PENDING,
	FETCH_MEMBERS_SUCCESS,
	FETCH_MEMBERS_ERROR,
	ADD_EVENT,
	SELECTED_MEMBER,
} from './../actions/action';

const initialState = {
	pending: false,
	data: [],
	error: null
};

export default function events(state = initialState, action) {
	switch (action.type) {
		case FETCH_MEMBERS_PENDING:
			return {
				...state,
				pending: true
			};
		case FETCH_MEMBERS_SUCCESS:
			return {
				...state,
				pending: false,
				data: action.data,
			};
		case ADD_EVENT:
			let indexes = [];
			const addedEvent = state.selected[0].events;
			const eventId =
				action.event
				&& action.event[0]
				&& action.event[0].events[0];
			const selectedId = state.selected[0].id;
			state.data.filter((filter, index) => {
				return (filter._id === state.selected.id) && indexes.push(index);
			});
			if(addedEvent.includes(action.event[0].events[0])) return {...state};
			return {
				...state,
				selected:{
					...state.selected,
					selected: [{id:selectedId, events:[...state.selected[0].events, ...[eventId]]}]
				}
			};
		case SELECTED_MEMBER:
			return {
				...state,
				// selected: action.event
				selected: [{id:action.member, events:[]}]
			};
		case FETCH_MEMBERS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error
			};
		default:
			return state;
	}
}

// data: {...state.data, ...action.data.data}

export const getMembers = state => state.members.data;
export const getEvents = state => state.members.event && state.members.event;
export const getMembersPending = state => state.members.pending;
export const getMembersError = state => state.members.error;