import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Commponents/Style/Allcss.scss";
import { Header } from './Commponents/Header/Header';
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Footer } from "./Commponents/Footer/Footer";
import { Newsletter } from "./Commponents/Newsletter/Newsletter";
import { Home } from "./Commponents/Home/Home";
import { Breadcrumb } from "./Commponents/BreadCrumb/BreadCrumb";
import { About } from "./Commponents/InnerPage/AboutPage/About";
import axios from "axios";
import React, { Component }  from 'react';
function App() {
  axios.defaults.baseURL = "http://sub.xinzatech.com/";
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/About" element={ <About /> } />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
