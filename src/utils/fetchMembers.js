import {
	fetchMembersPending,
	fetchMembersSuccess,
	fetchMembersError,
} from '../actions/action';

function fetchMembers() {
	return dispatch => {
		dispatch(fetchMembersPending());
		fetch('https://next.json-generator.com/api/json/get/NyNrlJTX8')
			.then(res => res.json())
			.then(res => {
				if (res.error) {
					throw(res.error);
				}
				dispatch(fetchMembersSuccess(res));
				return res;
			})
			.catch(error => {
				dispatch(fetchMembersError(error));
			})
	}
}

export default fetchMembers;