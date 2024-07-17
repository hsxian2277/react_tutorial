import { legacy_createStore } from 'redux';
import rootReducer from './rootReducer';

// Creating redux store
const store = legacy_createStore(rootReducer);

export default store;
