
import {ADD_TODO, DELETE_TODO, UPDATE_TODO_COMPLETION} from "../actions/todoActionTypes";


const todoReducer = (state = [], action) => {

    switch(action.type) {

        case ADD_TODO:
            return [...state, 
                    {id: action.payload[1], text: action.payload[0], completed: false, }
                   ];

        case DELETE_TODO:
            return state.filter(element => element.id !== action.payload);

        case UPDATE_TODO_COMPLETION:
            return state.map(element => (element.id === action.payload[0]) ? {...element, completed:action.payload[1]} : element);

        default:
            return state;
    }
}    

export default todoReducer;