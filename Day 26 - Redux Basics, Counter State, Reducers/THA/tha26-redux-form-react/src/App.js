import {Provider} from "react-redux";
import {formStore} from "./redux/form/formStore";

import FormEdit from "./components/FormEdit";
import FormView from "./components/FormView";

import './App.css';

const App = () => {
  return (
    <Provider store={formStore}>
      <div className="App">
        <h2>REDUX IS A CHOICE.</h2>
        <FormEdit/>
        <FormView/>
      </div>
    </Provider>
  );
}

export default App;
