
import { deleteTodo, updateTodoCompletion } from "../actions/todoAction";
import {useDispatch} from "react-redux";

import "./ListItem.css";


const ListItem = props => {

    let textStyle = {
        textDecoration: (props.completed) ? "line-through" : "none",
    };

    const dispatch = useDispatch();

    return(

        <div className="list-item">
            <input type="checkbox"
                   onChange={()=>{}}
                   onClick={() => {
                       dispatch(updateTodoCompletion(props.id, !props.completed));
                       }}
                   checked={props.completed}/>

            <label className="todotext" 
                   style={textStyle}>
                      {props.text}
            </label>

            <button onClick={() => dispatch(deleteTodo(props.id))}>
                 DELETE
            </button>

        </div>
    );
};

export default ListItem;