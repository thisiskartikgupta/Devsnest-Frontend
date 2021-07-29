
import ListItem from "./ListItem";
import {useSelector} from "react-redux";
import "./ShowTodo.css";

const ShowTodo = () => {

    const todoListData = useSelector(state => state.todoReducer);

    return (
        
        <div className="ShowTodo">
            
            {
                todoListData.map(element => !element.completed 
                                        && <ListItem text={element.text} 
                                                     key={element.id} 
                                                     id={element.id} 
                                                     completed={element.completed}/>)
            }

            {
                todoListData.map(element => element.completed 
                                        && <ListItem text={element.text} 
                                                     key={element.id} 
                                                     id={element.id} 
                                                     completed={element.completed}/>)
            }

        </div>
    );

};

export default ShowTodo;