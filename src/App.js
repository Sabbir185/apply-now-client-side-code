import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Employer from './components/Employer/Employer/Employer'
import Payment from './components/Employer/Payment/Payment';
import Admin from './components/Admin/Admin/Admin';
import Plan from './components/Admin/Plan/Plan';
import Review from './components/Admin/Review/Review';
import Profile from './components/Employer/Profile/Profile';
import EmployerProfile from './components/Employer/EmployerProfile/EmployerProfile';
import { createContext, useState } from 'react';
import AddJobPost from './components/Employer/AddJobPost/AddJobPost';

export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({})

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/employer'>
            <Employer />
          </Route>
          <Route path='/job-seeker'>
            <Home />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/payment/:hr'>
            <Payment />
          </Route>
          <Route path='/plan'>
            <Plan />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/employer-profile/:payId'>
            <Profile />
          </Route>
          <Route path='/profile/:id'>
            <EmployerProfile />
          </Route>
          <Route path='/addJobPost'>
            <AddJobPost />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
