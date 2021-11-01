import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import NavBar from "./components/NavBar.js";
import Detail from "./components/Detail";
import CreateActivity from "./components/CreateActivity";
// import Character from "./components/Character";
// import Form from "./components/Form";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/home/country/:id" component={Detail} />
      <Route path="/home/create" component={CreateActivity} />
    </div>
  );
}

export default App;
