export default (state = {}, action) => {
    switch (action.type) {
        case 'EVENT':
            return {
                result: action.payload
            };
        default:
            return state
    }
}