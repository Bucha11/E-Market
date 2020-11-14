import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../Redux/Reducers/authReducer";
import s from "./Login.module.css";

export const Login=(props)=>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
const loginIn=()=>{

  let userData={email:email,
  password:password}
  dispatch(loginThunk( userData))

}
    return(
        <div className={s.modal}>
    <form>
  <div className={s.wrapper}>
  <h2>Login</h2>
    <input type='text' placeholder='Enter your E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}>
    </input>
    <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
    <button type='submit' onClick={loginIn}>Log in</button>
    </div>
  </form>
  <div className={s.close} onClick={()=>{props.toogle()}}><button>X</button></div>
</div>)

}