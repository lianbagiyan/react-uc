import React, { FC } from "react";
import "./App.less";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Todo from "./components/Todo/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoComponent from "./components/Todo/index";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/todo">
          <TodoComponent />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
