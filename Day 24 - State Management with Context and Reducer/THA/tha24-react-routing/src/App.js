import { useState } from "react";
import { BrowserRouter, Switch,  Route,  Link} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      
      <BrowserRouter>
        <header className="App-header">
          <div className="route-link">
            <Link to="/">HOME</Link>
          </div>

          <div className="route-link">
            <Link to="/about">ABOUT</Link>
          </div> 

          <div className="route-link">
            <Link to="/profile">PROFILE</Link>
          </div>

          <div className="route-link">
            <Link to="/dashboard">DASHBOARD</Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <Home isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
          </Route>
          
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/profile">
            {isAuthenticated ? <Profile/> : <div>Priya ghrahak aap login nahi hai</div>}
          </Route>

          <Route path="/dashboard">
            {isAuthenticated ? <Dashboard/> : <div>Priya ghrahak aap login nahi hai</div>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;