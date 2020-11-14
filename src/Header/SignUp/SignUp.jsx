import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../Redux/Reducers/authReducer";
import s from "./SignUp.module.css";

export const SignUp=(props)=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const dispatch=useDispatch()
const signUp=()=>{

  let userData={email:email,
  password:password}
  dispatch(signUpThunk( userData))

}
    return(
        <div className={s.modalSignUp}>
    <form>
  <div className={s.wrapperSignUp}>
  <h2>Sign Up</h2>
    <input type='text' placeholder='Enter your E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}>
    </input>
    <input type="text" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
    <input type="text" placeholder="Confirm your password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
    <button type='submit' onClick={signUp}>Sign Up</button>
    </div>
  </form>
  <div className={s.close} onClick={()=>{props.toogle()}}><button>X</button></div>
</div>)

}