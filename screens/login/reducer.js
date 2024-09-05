import { produce } from 'immer';
import {
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS
} from './constants';

export const initialState = {
    user: null,
    loading: false,
    error: null,
}

const LoginPageReducer = produce((draft, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            draft.loading = true;
            draft.error = null;
            break;
        case LOGIN_SUCCESS:
            draft.loading = false;
            draft.user = action.payload;
            break;
        case LOGIN_FAILURE:
            draft.loading = false;
            draft.error = action.payload;
            break;
        default:
            break;
    }
}, initialState) ;

export default LoginPageReducer;