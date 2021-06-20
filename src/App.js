import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Employer from './components/Employer/Employer/Employer'

function App() {
  
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/employer'>
          <Employer />
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
