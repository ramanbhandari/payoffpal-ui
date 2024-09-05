import { produce } from 'immer';
import {
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS
} from './constants';

export const initialState = {
    user: null,
    loading: false,
    error: null,
}

const RegisterReducer = produce((draft, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
            draft.loading = true;
            draft.error = null;
            break;
        case REGISTER_SUCCESS:
            draft.loading = false;
            draft.user = action.payload;
            break;
        case REGISTER_FAILURE:
            draft.loading = false;
            draft.error = action.payload;
            break;
        default:
            break;
    }
}, initialState) ;

export default RegisterReducer;