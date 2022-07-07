import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import Register from "./components/Register";
import AuthControllerProvider from "./contexts/AuthController";
const App = () => {
  return (
    <AuthControllerProvider>
      <BrowserRouter>
        <div className="bg-slate-300 h-screen text-black flex">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthControllerProvider>
  );
};
export default App;
