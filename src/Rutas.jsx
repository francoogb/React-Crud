import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './paginas/home';
import Acerca from './paginas/Acerca';
import Error404 from './paginas/Error404'

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path = "*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
