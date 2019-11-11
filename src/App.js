import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./Public/Redux/store";
import Home from "../src/Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:index" component={Detail} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
