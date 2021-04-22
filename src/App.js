import React, { useEffect, createContext, useReducer, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/compopnets/Parallax/Parallax"
import "./App.css";

import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/screens/HomePage/HomePage";
import Login from "./components/screens/Login/Login";
import Profile from "./components/screens/ProfilePage/Profile"
import LoginTrainer from "./components/screens/LoginTrainer/LoginTrainer";
import CreateTraining from "./components/screens/CreateTraining/CreateTraining";


import { reducer, initialState } from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    // const member = JSON.parse(localStorage.getItem("member"));
    // if (member) {
    //   if (!history.location.pathname.startsWith("/reset/:token")) {
    //     dispatch({ type: "MEMBER", payload: member });
    //     history.push("/");
    //   } else {
    //     dispatch({ type: "MEMBER", payload: member });
    //     history.push("/reset/:token");
    //   }
    // } else {
    //   if (!history.location.pathname.startsWith("/reset")) {
    //     history.push("/signin");
    //   }
    // }
  }, []);

  const location = useLocation();
  const background = location.state && location.state.background;
 

  return (
    <Switch location={background || location}>
      <Route exact path="/HomePage">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/logintrainer">
        <LoginTrainer />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/createtraining">
        <CreateTraining />
      </Route>
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
