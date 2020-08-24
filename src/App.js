import React from "react";
import { Content } from "./Content/Content";
import { Header } from "./Header/Header";
import { Slider } from "./Slider/Slider";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./NavBar/NavBar";
import s from "./App.module.css";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className={s.App}>
      <BrowserRouter>
      <Header />
      <NavBar />
      <Slider />
      <Content />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
