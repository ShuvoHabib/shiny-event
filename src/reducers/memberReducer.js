import {
    FETCH_MEMBERS_PENDING,
    FETCH_MEMBERS_SUCCESS,
    FETCH_MEMBERS_ERROR,
    ADD_EVENT,
    SELECTED_MEMBER,
    LOCATE_EVENT
} from './../actions/action';

const initialState = {
    pending: false,
    data: [],
    error: null,
    isSelected: false
};

export default function events(state = initialState, action) {
    switch (action.type) {
        case FETCH_MEMBERS_PENDING:
            return {
                ...state,
                pending: true
            };
        case LOCATE_EVENT:
            return {
                ...state,
                isSelected: action.data
            };
        case FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            };

        case ADD_EVENT:
            console.log(state.selected, state.selectedMemberId);
            const index = state.selected && state.selected.findIndex((select)=>select.id === state.selectedMemberId);
            // console.log(filterId);
            // let index = (state.selected && state.selected.length - 1);
            let indexes = [];
            const addedEvent = state.selected[index].events;
            const eventId =
                action.event
                && action.event[0]
                && action.event[0].events[0];
            const selectedId = state.selected[index].id;

            state.data.filter((filter, index) => {
                return (filter._id === state.selected.id) && indexes.push(index);
            });
            if (addedEvent.includes(action.event[0].events[0])) return {...state};
            return {
                ...state,
                selected: [
                    ...state.selected.slice(0, index),
                    {id: selectedId, events: [...state.selected[index].events, ...[eventId]]},
                ],
                isSelected: false
            };
        case SELECTED_MEMBER:
            const selectedMemberId = state.selected && state.selected.map((select)=>select.id);
            if (selectedMemberId && selectedMemberId.includes(action.member)) return {
                ...state,
                selectedMemberId: action.member,
                isSelected: false,
            };
            return {
                ...state,
                selected: [
                    ...state.selected || [],
                    {
                        id: action.member,
                        events: []
                    },
                ],
                isSelected: false,
                selectedMemberId: action.member
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