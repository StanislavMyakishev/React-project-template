import { combineReducers } from 'redux';

import app from './app';

const appReducer = combineReducers({
    app,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
