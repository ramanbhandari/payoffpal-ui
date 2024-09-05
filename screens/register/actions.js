import {
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS
} from './constants';

export function registerSuccess(user){
    return {
        type: REGISTER_SUCCESS,
        payload: user
    };
}
export function registerFailure(error){
    return {
        type: REGISTER_FAILURE,
        payload: error
    };
}
export function registerRequest(request){
    return {
        type: REGISTER_REQUEST,
        payload: request
    };
}