import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Home from './components/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
