import {FETCH_EVENTS_PENDING, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR} from './../actions/action';

const initialState = {
    pending: false,
    products: [],
    error: null
}

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_EVENTS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products
            };
        case FETCH_EVENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const getProducts = state => {
    return state.productsReducer.products
};
export const getProductsPending = state => state.productsReducer.pending;
export const getProductsError = state => state.productsReducer.error;