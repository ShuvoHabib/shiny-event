export const eventAction = () => dispatch => {
    dispatch({
        type: 'EVENT',
        payload: 'result_of_simple_action'
    })
};