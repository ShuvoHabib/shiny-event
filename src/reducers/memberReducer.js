import {
	FETCH_MEMBERS_PENDING,
	FETCH_MEMBERS_SUCCESS,
	FETCH_MEMBERS_ERROR,
	ADD_EVENT,
} from './../actions/action';

const initialState = {
	pending: false,
	data: [],
	error: null
};

export default function events(state = initialState, action) {
	switch(action.type) {
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
			const event = action.event;
			console.log(event.id, state.data[0]._id);
			return {
				...state,
				data: state.data.map(el => ({
					...el,
					event: (event.id === state.data[0]._id) && event.id
				}))
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

export const getMembers = state => state.members.data;
export const getEvents = state => state.members.event && state.members.event;
export const getMembersPending = state => state.members.pending;
export const getMembersError = state => state.members.error;