import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import { LOGOUT_SUCCESS } from '../constants/auth';

const appReducer = combineReducers({
    form,
    auth
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;