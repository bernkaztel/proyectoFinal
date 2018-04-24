import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Redirect } from "react-router-dom";
import { store } from "./store/storeConfig";
import { Provider } from "react-redux"
import Navbar from './components/reacstrap/Navbar.js'


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
