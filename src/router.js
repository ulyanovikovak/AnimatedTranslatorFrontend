import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";


const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" Component={Login} exact/>
            <Route path="/register" Component={Register} exact/>
            <Route path="/" Component={Home} exact/>
        </Routes>
    </BrowserRouter>
}
export default Router;