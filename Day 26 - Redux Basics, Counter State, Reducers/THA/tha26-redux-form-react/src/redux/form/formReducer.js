import {UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_PASSWORD} from './formActionTypes';

const formInitialState = {
    username: "",
    email: "",
    password: "",
};

const formReducer = (state = formInitialState, action) => {

    switch (action.type) {

        case UPDATE_USERNAME:
            console.log("Username updated");
            break;

        case UPDATE_EMAIL:
            console.log("Email updated");
            break;

        case UPDATE_PASSWORD:
            console.log("Password updated");
            break;

        default:
            console.log("Unknown action");
    }

    return state;
};

export default formReducer;

