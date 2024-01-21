import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/rootReducer';

let initialstate = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;