
import './App.css';
import List from './List';

const App = () => {

  const num : number = 123;

  const list : string[] = ["10","20","30"];
  return(
    <div>
      <h1>Hello</h1>
      <div>Number = {num}</div>
      <List data={list} />
    </div>
  );
};

export default App;