import { UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_PASSWORD } from "./formActionTypes";

export const updateUsername = (username) => {
    return({
        type: UPDATE_USERNAME,
        payload: username,
    });
};

export const updateEmail = (email) => {
    return({
        type: UPDATE_EMAIL,
        payload: email,
    });
};

export const updatePassword = (password) => {
    return({
        type: UPDATE_PASSWORD,
        payload: password,
    });
};