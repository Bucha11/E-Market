import React, { useEffect } from "react";
import { Content } from "./Content/Content";
import { Header } from "./Header/Header";
import { Slider } from "./Slider/Slider";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./NavBar/NavBar";
import s from "./App.module.css";
import { BrowserRouter } from "react-router-dom";
import { firebaseInitial } from "./API/Auth";
import { isAuthThunk } from "./Redux/Reducers/authReducer";
import { useDispatch } from "react-redux";
import { setItemsThunk } from "./Redux/Reducers/homeReducer";


function App() {
  const dispatch=useDispatch()
    useEffect(() => {
   
    dispatch(setItemsThunk());
  }, []);
  useEffect(()=>{firebaseInitial() },[])
  useEffect(()=>{dispatch(isAuthThunk())},[])
  return (
    <div className={s.App}>
      <BrowserRouter>
     
      <NavBar />
      <Slider />
      <Content />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
