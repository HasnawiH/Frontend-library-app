import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./Public/Redux/store";
import Home from "../src/Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
import History from "./Pages/History/History";

function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/history" component={History} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
