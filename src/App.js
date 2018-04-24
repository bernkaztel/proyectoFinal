import React, { Component } from "react";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Chat from "./components/chatContainer";
import Navbar from "./components/reacstrap/Navbar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/reacstrap/Footer";
//import {messages} from './components/messages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/chat" exact component={Chat}/>
        </Switch>
        <Footer/>
    </div>
    );
  }
}

export default App;
