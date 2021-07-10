import ScrollView from './components/ScrollView';
import './App.css';
import {useState} from "react";

function App() {

  const [listItem, setListItem] = useState([
    {
        foodName:"Pizza",calories:"266"
    },
    {
        foodName:"Burger",calories:"295"
    },
    {
        foodName:"Brownie",calories:"466"
    },
    {
      foodName:"Pani Puri",calories:"30"
    },
    {
        foodName:"Fried Rice",calories:"163"
    },
    {
        foodName:"Lasagna",calories:"135"
    },
  ]);
    
  const [inputValues, setInputValues] = useState({foodName: "", calories:0});

  const deleteListItem = (deleteIndex) => {
    setListItem(listItem.filter((element,index) => (index !== deleteIndex) ? element : null));
  };

  const addListItem = (inputFoodName, inputCalories) => { 
     setListItem([...listItem, {foodName: inputFoodName, calories: inputCalories}]);
  }

  return (
    <div className="App">

      <div className="add-container">
        <input className="input-food-item"
               placeholder="Enter Foodname"
               onChange={(event) => {
                 setInputValues({
                   foodName: event.target.value,
                   calories: inputValues.calories,
                 });
               }}/>

        <input className="input-calories" 
               type="number" 
               placeholder="Enter calories"
               onChange={(event)=> {
                 setInputValues({
                   foodName: inputValues.foodName,
                   calories: event.target.value,
                 })
                }}/>
        <button className="add-button" 
                onClick={()=> {
                  addListItem(inputValues.foodName, inputValues.calories);
        }}>+</button>
      </div>

      <ScrollView deleteListItem={deleteListItem} listItem={listItem}/>
              
    </div>
  );
}

export default App;