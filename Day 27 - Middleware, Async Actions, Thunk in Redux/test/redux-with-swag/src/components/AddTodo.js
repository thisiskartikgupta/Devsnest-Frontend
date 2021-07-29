
import { addTodo } from "../actions/todoAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "./AddTodo.css";


const AddTodo = () => {

    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    return (
        
        <div className="AddTodo">

            <input className="add-todo-input"
                   type="text"
                   placeholder="Enter text"
                   onChange={(event) => setTodoText(event.target.value)} 
                   value={todoText}/>

            <button className="add-todo-button" 
                    onClick={(event) => {
                        let timestamp = new Date();
                        let todoID = `${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getYear()}.${timestamp.getHours()}.${timestamp.getMinutes()}.${timestamp.getSeconds()}.${timestamp.getMilliseconds()}`;
            
                        dispatch(addTodo(todoText, todoID));
                        setTodoText("");
                    }}>
                        ADD +
            </button>
            
        </div>
    )
};

export default AddTodo;
