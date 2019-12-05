import {
	FETCH_MEMBERS_PENDING,
	FETCH_MEMBERS_SUCCESS,
	FETCH_MEMBERS_ERROR,
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
				data: action.data
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
export const getMembersPending = state => state.members.pending;
export const getMembersError = state => state.members.error;