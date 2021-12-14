import React, { Component } from "react";
import Home from "../Home"
import Itemlist from "../Itemlist"
import Weather from "../Weather"
import {Route, Routes} from 'react-router-dom';
// Para el uso de las rutas 

class Main extends Component {
  render() {
    return <div>
      <h3>MAIN - RENDERIZA TODAS LAS VISTAS</h3>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/itemlist" element={<Itemlist/>} />
        <Route path="/weather" element={<Weather/>} />
      </Routes>  
    </div>
  }
}

export default Main;
