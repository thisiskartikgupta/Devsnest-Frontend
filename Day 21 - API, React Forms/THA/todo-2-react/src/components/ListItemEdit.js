import {useState} from 'react';

import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-button/dist/button.css';
import Button from '@material/react-button';

import './ListItemEdit.css';

const ListItemEdit = (props) => {

    const [newFoodName, setNewFoodName] = useState(props.foodName);
    const [newCalories, setNewCalories] = useState(props.calories);
    
    return(
        <div className="list-item">

            <div className="list-content">
                
            <TextField className="listitem-edit-textfield-class"
                label='Updated Food Item'
                onTrailingIconSelect={() => setNewFoodName('')}
                trailingIcon={<MaterialIcon role="button" icon="clear"/>}
                ><Input 
                value={newFoodName}
                onChange={(e) => setNewFoodName(e.currentTarget.value)} />
            </TextField>

            <TextField className="listitem-edit-textfield-class"
                label='Updated Calories'
                onTrailingIconSelect={() => setNewCalories('')}
                trailingIcon={<MaterialIcon role="button" icon="clear"/>}
                ><Input type="number"
                value={newCalories}
                onChange={(e) => setNewCalories(e.currentTarget.value)} />
            </TextField>

            </div>
            
            <Button className="list-item-save-button"
                raised={true}
                onClick={()=>{
                    props.updateListItem(props.position, newFoodName,newCalories);
                    props.setIsEditableFalse(props.position);
                }}
                >
                <MaterialIcon role="button" icon="check_circle"/>
            </Button>
                   
        </div>
    )
};

export default ListItemEdit;