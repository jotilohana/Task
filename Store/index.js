import reducer from './reducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const Store = createStore(reducer, {}, applyMiddleware(thunk));
export default Store;
