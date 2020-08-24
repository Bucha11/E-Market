import React from "react";
import { Content } from "./Content/Content";
import { Header } from "./Header/Header";
import { Slider } from "./Slider/Slider";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./NavBar/NavBar";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <NavBar />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
