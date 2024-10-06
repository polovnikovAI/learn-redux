import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from '@redux-devtools/extension/';
import { thunk } from 'redux-thunk';
import { countReducer } from './countReducer';
import createSagaMiddleware from 'redux-saga'
import { countWatcher } from '../saga/countSaga';
import userReducer from './userReducer';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    count: countReducer,
    users: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)