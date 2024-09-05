import { call, put, take, takeLatest } from 'redux-saga/effects';
import api from '../../api/axios';
import {
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS
} from './constants';

const registerApi = (credentials) => api.post('/register', credentials);

export function* registerSaga(action){
    try {
        console.log(action.payload);
        const response = yield call(registerApi, action.payload);
        yield put({type: REGISTER_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: REGISTER_FAILURE, payload: error.message});
    }
}

export function* registerRequestSaga(){
    yield takeLatest(REGISTER_REQUEST, registerSaga);
}