import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {StoreProvider} from "./stateManegement/store";
import SocketService from "./socketService";
import Router from "./router"
import "./style.scss"

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StoreProvider>
    <Router />
    <SocketService/>
  </StoreProvider>
);


