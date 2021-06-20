import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';

function App() {
  
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/employer'>
          <Home />
        </Route>
        <Route exact path='/job-seeker'>
          <Home />
        </Route>
        <Route exact path='/admin'>
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
