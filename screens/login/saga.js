import { call, put, take, takeLatest } from 'redux-saga/effects';
import api from '../../api/axios';
import {
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS
} from './constants';

const loginApi = (credentials) => api.post('/login', credentials);

export function* loginSaga(action){
    try {
        const response = yield call(loginApi, action.payload);
        yield put({type: LOGIN_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({type: LOGIN_FAILURE, payload: error.message});
    }
}

export function* loginRequestSaga(){
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}