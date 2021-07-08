
import Counter from './components/Counter';
import './App.css';

function App() {

 

  return (
    <div className="App">
        <h2>There are four counters with all of them managing their own state.</h2>
        {
          [...Array(4)].map(() => <Counter />)
        }
    </div>
  );
}

export default App;
