import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {StoreProvider} from "./stateManegement/store";
import SocketService from "./socketService";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StoreProvider>
    <App />
    <SocketService/>
  </StoreProvider>
);


