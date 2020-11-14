import React, { useState } from "react";
import s from "./Header.module.css";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";

export const Header = () => {
  const [showModalLogin,setShowModalLogin]=useState(false)
  const [showModalSignUp,setShowModalSignUp]=useState(false)
  return (
    <div className={s.wrapper}>
      <div className={s.header}>

        <div>
          <button className={s.headerButton} onClick={()=>{setShowModalLogin(!showModalLogin)}}>Login</button>
        </div>
        <div>
        <button className={s.headerButton} onClick={()=>{setShowModalSignUp(!showModalSignUp)}}>Sign Up</button>
        </div>
        {showModalLogin?<Login toogle={setShowModalLogin}/>:''}
        {showModalSignUp?<SignUp toogle={setShowModalSignUp}/>:''}
      </div>
    </div>
  );
};
