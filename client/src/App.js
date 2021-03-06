import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/admin"]}>
            <Admin/>
          </Route>
          <Route exact path={["/"]}>
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
