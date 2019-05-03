import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar/index"
import { Container } from "./Components/Grid/index"
import Jumbotron from "./Components/Jumbotron/index"
import Home from "./pages/Home"
import Saved from "./pages/Saved"


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Container>
            <Jumbotron/>
          </Container>
          <Switch>
            <Route exact path="/" component = {Home}/>
            <Route exact path="/search" component = {Home}/>
            <Route exact path="/saved" component = {Saved}/>
            <Route  component = {Error}/>
          </Switch>
      </Router>
      </div>
      
    );
  }
}

export default App;