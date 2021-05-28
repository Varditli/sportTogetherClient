import React, { useEffect, createContext, useReducer, useContext } from "react";

import "./App.css";

import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect
} from "react-router-dom";
import HomePage from "./components/screens/HomePage/HomePage";
import LoginTrainee from "./components/screens/LoginTrainee/LoginTrainee";
import TraineeProfile from "./components/screens/ProfilePage/TraineeProfile";
import LoginTrainer from "./components/screens/LoginTrainer/LoginTrainer";
import TrainerProfile from "./components/screens/ProfilePage/TrainerProfile";
import CreateTraining from "./components/screens/CreateTraining/CreateTraining";



import { reducer, initialState } from "./reducers/userReducer";
import HeaderNavigation from "./components/header/HeaderNavigation";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);


  //for reset password
  
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
        <Redirect to="/HomePage" />
      </Route>
      <Route exact path="/HomePage">
        <HomePage />
      </Route>
      <Route exact path="/TraineeProfile">
        <TraineeProfile />
      </Route>
      <Route exact path="/LoginTrainee">
        <LoginTrainee />
      </Route>
      <Route exact path="/LoginTrainer">
        <LoginTrainer />
      </Route>
      <Route exact path="/TrainerProfile">
        <TrainerProfile />
      </Route>
      <Route exact path="/CreateTraining">
        <CreateTraining />
      </Route>
    </Switch>
  );
};
function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { ...rest } = props;
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <HeaderNavigation/>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
