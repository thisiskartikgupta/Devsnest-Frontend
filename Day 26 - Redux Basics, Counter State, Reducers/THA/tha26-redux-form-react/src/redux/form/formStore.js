import {createStore} from 'redux';
import rootReducer from './rootReducer';

export const formStore = createStore(rootReducer);