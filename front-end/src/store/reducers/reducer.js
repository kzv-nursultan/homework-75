import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "../actions/action";

const initialState = {
    loading:false,
    data:null,
    error:null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_DATA_REQUEST:
            return {...state, loading:true};
        case POST_DATA_SUCCESS:
            return {...state, loading:false}
        case POST_DATA_FAILURE:
            return {...state, loading:false, error:action.error}
        case FETCH_DATA_REQUEST:
            return {...state, loading:true};
        case FETCH_DATA_SUCCESS:
            return {...state, data:action.value};
        case FETCH_DATA_FAILURE:
            return {...state, loading:false, error:action.error};
        default:
            return state;
    };
};