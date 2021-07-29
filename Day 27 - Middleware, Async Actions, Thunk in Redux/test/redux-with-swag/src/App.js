import AddTodo from './components/AddTodo';
import ShowTodo from './components/ShowTodo';

import todoStore from './store/todoStore';
import {Provider} from "react-redux";

import './App.css';

function App() {

  return (
    <div className="App">
        <h2 className="header">TODO WITH REDUX</h2>

        <Provider store={todoStore}>
          <AddTodo/>
          <ShowTodo/>
        </Provider> 
    </div>
  );
};

export default App;