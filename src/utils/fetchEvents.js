import {
	fetchEventsPending,
	fetchEventsSuccess,
	fetchEventsError
} from '../actions/action';

function fetchEvents() {
    return dispatch => {
        dispatch(fetchEventsPending());
        fetch('https://next.json-generator.com/api/json/get/Vk7OTypQ8')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchEventsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchEventsError(error));
            })
    }
}

export default fetchEvents;