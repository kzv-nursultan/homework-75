import axios from "../../axiosBase";

export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'; 

export const postDataRequest = () => (
    {type:POST_DATA_REQUEST}
);
export const postDataSuccess = value => (
    {type:POST_DATA_SUCCESS, value}
);
export const postDataFailure = (error) => (
    {type:POST_DATA_FAILURE, error}
);

export const fetchDataRequest = () => (
    {type: FETCH_DATA_REQUEST}
);
export const fetchDataSuccess = (value) => (
    {type: FETCH_DATA_SUCCESS, value}
);
export const fetchDataFailure = error => (
    {type: FETCH_DATA_FAILURE, error}
);

export const postData = (path,item) => {
    return async dispatch => {
        try {
            dispatch(postDataRequest());
            await axios.post(path, item);
            dispatch(postDataSuccess());
        } catch (e) {
            dispatch(postDataFailure(e))
        };
    };
};

export const fetchData = (path,key,setInput,value) => {
    return async dispatch => {
        try {
            dispatch(fetchDataRequest());
            const response = await axios.get(path);
            dispatch(fetchDataSuccess(response['data'][key]));
            setInput(prevState=>({
                ...prevState,
                [value]:response.data[key]
            }));
        } catch (e) {
            dispatch(fetchDataFailure(e));
            console.log(e);
        };
    };
};
