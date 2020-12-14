import {firebaseIsAuth, firebaseSignIn, firebaseSignUp} from '../../API/Auth';
import firebase from "firebase"
const LOGIN='LOGIN'
const SIGNUP="SIGNUP"
const IS_AUTH='ISAUTH'

const initialState = {
   isAuth:false,
   email:''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
         
return{
state

}
case SIGNUP:
  return state
    default:
      return state;

case IS_AUTH:

return{...state,isAuth:true,email:action.payload
  }
};}

const login = (payload) => {

  return {
    type: LOGIN,
    payload,
  };
};

const signUp = () => {

  return {
    type: SIGNUP,
    
  };
};

const isAuth=(payload)=>{debugger
  return {
    type:IS_AUTH,
    payload

  }
}

export const loginThunk = (payload) =>async (dispatch) => {
  const {email,password}=payload
  await firebaseSignIn(email,password)
  
    dispatch(login(payload));
};

export const signUpThunk=(payload)=>async (dispatch) =>{
  
  const {email,password}=payload
  await firebaseSignUp(email,password)

  dispatch(signUp())
}

export const isAuthThunk=()=>(dispatch)=>{
 debugger
firebase.auth().onAuthStateChanged(
  (user)=>{if (user){console.log(user)}
})

  

}
