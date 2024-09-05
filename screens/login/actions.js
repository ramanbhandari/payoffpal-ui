import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";

export function loginSuccess(user){
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
}
export function loginFailure(error){
    return {
        type: LOGIN_FAILURE,
        payload: error
    };
}
export function loginRequest(request){
    return {
        type: LOGIN_REQUEST,
        payload: request
    };
}