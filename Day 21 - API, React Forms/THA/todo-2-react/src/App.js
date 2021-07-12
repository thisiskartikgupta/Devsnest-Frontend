//TODO: 1. Deploy 2. Not editing for new elements


import { useState } from 'react';

import './App.css';
import MaterialHeader from './components/MaterialHeader';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import AddTodoSection from './components/AddTodoSection';
import TodoDisplaySection from './components/TodoDisplaySection';

function App() {

  const [listItem, setListItem] = useState([
    {
        foodName:"Pizza",calories:"266",editIsActive:false,
    },
    {
        foodName:"Brownie",calories:"466",editIsActive:false,
    },
    {
        foodName:"Pani Puri",calories:"30",editIsActive:false,
    },
        {
        foodName:"Lasagna",calories:"135",editIsActive:false,
    },
  ]);

  

  const addListItem = (inputFoodName, inputCalories) => { 
     
    if(inputCalories === '') 
        inputCalories = 0;  
    
    if(inputFoodName === '')  
        alert("Food Name cannot be empty");

    else 
        setListItem([...listItem, {foodName: inputFoodName, calories: inputCalories, editIsActive: false}]);
  }

  const deleteListItem = (deleteIndex) => {
    setListItem(listItem.filter((element,index) => (index !== deleteIndex) ? element : null));
  };

  const updateListItem = (updateIndex, newFoodName, newCalories) => {
    
    let updatedListItem = [...listItem];
    updatedListItem[updateIndex].foodName = newFoodName;
    updatedListItem[updateIndex].calories = newCalories;

    setListItem(updatedListItem);
  }

  const setIsEditableTrue = (index) => {
     
    let updatedListItem = [...listItem];
    
    if(updatedListItem[index].editIsActive === false)
      updatedListItem[index].editIsActive = true;

      setListItem(updatedListItem);
  }

  const setIsEditableFalse = (index) => {
     
    let updatedListItem = [...listItem];
    
    if(updatedListItem[index].editIsActive === true)
      updatedListItem[index].editIsActive = false;

    setListItem(updatedListItem);
  }

  return (
    <div className="App">
      <MaterialHeader/>

      <TopAppBarFixedAdjust>
        <div className="main-flex-container">
          
            <AddTodoSection addListItem={addListItem}/>
            <TodoDisplaySection listItemState={listItem} 
                                deleteListItem={deleteListItem}
                                updateListItem={updateListItem}
                                setIsEditableTrue={setIsEditableTrue}
                                setIsEditableFalse={setIsEditableFalse}/>


        </div>
      </TopAppBarFixedAdjust>
    </div>
  );
}

export default App;
