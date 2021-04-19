import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import BookedService from './Components/BookedService/BookedService';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name:{loggedInUser.name}</p>
    <Router>
      <Switch>
       <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
            </Route>
          <Route  path="/bookedService">
            <BookedService></BookedService>
           </Route>
       </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
