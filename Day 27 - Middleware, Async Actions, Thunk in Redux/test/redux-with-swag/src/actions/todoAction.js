import { ADD_TODO, DELETE_TODO, UPDATE_TODO_COMPLETION } from "./todoActionTypes";


export function addTodo(todoText, todoID) {
    return {
        type: ADD_TODO,
        payload: [todoText, todoID],
    };
};

export function deleteTodo(todoID) {
    return {
        type: DELETE_TODO,
        payload: todoID,
    };
};

export function updateTodoCompletion(todoID, todoState) {
    return {
        type: UPDATE_TODO_COMPLETION,
        payload: [todoID, todoState],
    };
};


