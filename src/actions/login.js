import {
    LOGIN,
} from '../constants/ActionTypes';
import { createAction } from 'redux-actions';
import login from '../api/login.js';

let action_login = createAction(LOGIN);

export function getLoginStatus(param) {
    return dispatch => {
        // login.fetchLoginStatus(tenantName, userName, password, appId, cb, result => dispatch(action_login(result)));
        dispatch(action_login(param))
    }
}
