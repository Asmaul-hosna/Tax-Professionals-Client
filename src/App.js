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
import AddServices from './Components/AddServices/AddServices';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    
    <Router>
      <Switch>
       <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
            </Route>
          <PrivateRoute  path="/bookedService">
            <BookedService></BookedService>
           </PrivateRoute>
           <Route path="/addServices">
             <AddServices></AddServices>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
            </Route>
          
       </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
