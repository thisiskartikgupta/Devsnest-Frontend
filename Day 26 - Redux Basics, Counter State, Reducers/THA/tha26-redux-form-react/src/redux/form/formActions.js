import { UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_PASSWORD } from "./formActionTypes";

export const updateUsername = () => {
    return({
        type: UPDATE_USERNAME,
    });
};

export const updateEmail = () => {
    return({
        type: UPDATE_EMAIL,
    });
};

export const updatePassword = () => {
    return({
        type: UPDATE_PASSWORD,
    });
};