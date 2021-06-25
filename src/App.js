import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import AddService from "./components/Dashboard/AddService/AddService";
import Book from "./components/Dashboard/Book/Book";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Review from "./components/Dashboard/Review/Review";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    error: "",
    success: false,
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/book/:bookCode">
            <Book></Book>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*"></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
