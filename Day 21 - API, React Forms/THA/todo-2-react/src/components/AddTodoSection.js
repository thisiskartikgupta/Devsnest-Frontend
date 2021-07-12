import { useState } from 'react';

import '@material/react-text-field/dist/text-field.css';
import '@material/react-button/dist/button.css';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';

import './AddTodoSection.css';


const AddTodoSection = (props) => {

    const[inputFoodItemName, setInputFoodItemName] = useState({value: ''});
    const[inputCalories, setInputCalories] = useState({value:""});

    return(
        <div className="add-todo-section">

            <TextField className="textfield-class"
                label='Enter Food Item'
                leadingIcon={<MaterialIcon icon="fastfood"/>}
                onTrailingIconSelect={() => setInputFoodItemName({value: ''})}
                trailingIcon={<MaterialIcon role="button" icon="clear"/>}
                ><Input 
                value={inputFoodItemName.value}
                onChange={(e) => setInputFoodItemName({value: e.currentTarget.value})} />
            </TextField>

            <TextField className="textfield-class"
                
                label='Enter calories'
                leadingIcon={<MaterialIcon icon="flash_on"/>}
                onTrailingIconSelect={() => setInputCalories({value: ''})}
                trailingIcon={<MaterialIcon role="button" icon="clear"/>}
                ><Input type="number"
                value={inputCalories.value}
                onChange={(e) => setInputCalories({value: e.currentTarget.value})} />
            </TextField>

            <Button
                className="button-class"
                raised={true}
                onClick={() => {
                    // console.log(inputFoodItemName,inputCalories);
                    props.addListItem(inputFoodItemName.value, inputCalories.value);
                    setInputFoodItemName({value:""})
                    setInputCalories({value: ''})
                }}
                >
                ADD +
            </Button>

        </div>
    );
}

export default AddTodoSection;