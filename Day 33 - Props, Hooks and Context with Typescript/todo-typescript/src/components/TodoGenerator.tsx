
import {useState} from "react";
import "./TodoGenerator.scss";

interface TodoGeneratorProps {
    addTodo: Function,
}

const TodoGenerator : React.FunctionComponent<TodoGeneratorProps> = props => {

    const [todoText, setTodoText] = useState<string>("");

    return(
        <div className="TodoGenerator dark">
            <input className="TodoGenerator todo-input dark"
                   placeholder="Enter Text Here"
                   autoFocus value={todoText}
                   onChange={
                       (e)=> setTodoText(e.currentTarget.value)
                       }/>

            <button className="TodoGenerator add-button dark"
                    onClick={() => {
                        props.addTodo(todoText);
                        setTodoText("");
                    }}>ADD</button>

        </div>
    );
};

export default TodoGenerator;