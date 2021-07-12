import ListItemEdit from './ListItemEdit';
import ListItemView from './ListItemView';
import './TodoDisplaySection.css';

const TodoDisplaySection = (props) => {

    return(
        <div className="todo-display-section" >
            
            {
                [...props.listItemState].map((element,index) => {
                
                
                    if(element.editIsActive)
                        return <ListItemEdit foodName={element.foodName} calories={element.calories} 
                                             key={index} updateListItem={props.updateListItem} position={index}
                                             
                                  setIsEditableFalse={props.setIsEditableFalse}
                                             />

                    else
                        return (<ListItemView foodName={element.foodName}
                                    calories={element.calories}
                                    key={index} 
                                    deleteListItem={props.deleteListItem} 
                                    position={index}
                                    setIsEditableTrue={props.setIsEditableTrue}
                                    />)})
            }
            
        </div>
    );
}

export default TodoDisplaySection;