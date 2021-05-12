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
import LoginTrainee from "./components/screens/LoginTrainee/LoginTrainee";
import TrainerProfile from "./components/screens/ProfilePage/TrainerProfile";
import LoginTrainer from "./components/screens/LoginTrainer/LoginTrainer";
import CreateTraining from "./components/screens/CreateTraining/CreateTraining";
import TraineeProfile from "./components/screens/ProfilePage/TraineeProfile";


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
      <Route exact path="/LoginTrainee">
        <LoginTrainee />
      </Route>
      <Route exact path="/LoginTrainer">
        <LoginTrainer />
      </Route>
      <Route exact path="/Profile">
        <Profile />
      </Route>
      <Route exact path="/CreateTraining">
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
