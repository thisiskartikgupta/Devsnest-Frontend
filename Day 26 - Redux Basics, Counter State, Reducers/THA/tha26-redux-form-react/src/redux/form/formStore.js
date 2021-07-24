import {createStore} from 'redux';
import formReducer from './formReducer';

export const formStore = createStore(formReducer);