import React, { useEffect, createContext, useReducer, useContext } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
// import Home from "./components/screens/Home";
import Signin from "./components/screens/Signin";
import Signup from "./components/screens/Signup";
import SignupTrainer from "./components/screens/SignupTrainer";
import SigninTrainer from "./components/screens/SigninTrainer";
import HomePage from "./components/screens/HomePage/HomePage";
import Login from "./components/screens/Login/Login"


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
      <Route exact path="/">
        <HomePage />
      </Route>
      {/* <Route exact path="/signin">
        <Signin />
      </Route> */}
      <Route exact path="/login">
        <Login />
      </Route>
      {/* <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signuptrainer">
        <SignupTrainer />
      </Route>
      <Route exact path="/signintrainer">
        <SigninTrainer />
      </Route> */}
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
