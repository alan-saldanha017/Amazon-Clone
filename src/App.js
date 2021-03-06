import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Login from './Login'
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./Firebase";
import {useStateValue} from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => { 
    //will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is >>>',authUser);
    if(authUser){
      //the user is logged in 
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    }else{
      // the use is logged out
      dispatch({
        type: "SET_USER",
        user: null
      });
    }
  });
  }, []);
  return (
    //BEM
    <Router>
    <div className="App">
      <Switch>
      <Route path="/login">
        <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
        <Checkout/>
        </Route>
        <Route path="/">
        <Header/>
        <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
