import { useContext } from "react";
import {Todos} from "../App";
import { ThemeContext } from "../ThemeContext";
import "./TodoDisplay.scss";

interface TodoDisplayProps {
    todos: Todos[],
};

const TodoDisplay : React.FunctionComponent<TodoDisplayProps> = props => {

    let {theme} = useContext(ThemeContext);
    let ListItemStyle = theme ? "listItem dark" : "listItem";

    return(
        <div className="TodoDisplay">
            {
                props.todos.length === 0
                ? <div className={ListItemStyle}>No Todos Found</div>
                : <ol>
                    {
                        props.todos.map((element, index) => <li className={ListItemStyle} key={index}>{element}</li>)
                    }
                  </ol>

            }
        </div>
    );
};

export default TodoDisplay;