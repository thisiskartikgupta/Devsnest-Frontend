import {UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_PASSWORD} from './formActionTypes';

const formInitialState = {
    username: "",
    email: "",
    password: "",
};

const formReducer = (state = formInitialState, action) => {

    switch (action.type) {

        case UPDATE_USERNAME:
            return {...state, username: action.payload};

        case UPDATE_EMAIL:
            return {...state, email: action.payload};

        case UPDATE_PASSWORD:
            return {...state, password: action.payload};

        default:
            return state;
    }
};

export default formReducer;

