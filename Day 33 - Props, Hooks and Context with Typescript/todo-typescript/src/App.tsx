
import { useState} from "react";

import TodoDisplay from "./components/TodoDisplay";
import TodoGenerator from "./components/TodoGenerator";
import { ThemeContext } from "./ThemeContext";

import "./App.scss";
import ThemeButton from "./ThemeButton";

export interface Todos {
  title: string,
};

const App : React.FunctionComponent = () => {

  const [todos, setTodos] = useState<Todos[]>([]);
  const [theme, setTheme] = useState<boolean>(false);
  function addTodos(todo:Todos) {
    setTodos([...todos, todo]);
  }

  return(
    <div className="App">

      <div className="App-header">TODO LIST</div>

      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeButton/>
        <TodoGenerator addTodo={addTodos}/>
        <TodoDisplay todos={todos}/>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
