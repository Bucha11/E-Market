import {firebaseSignIn, firebaseSignUp} from '../../API/Auth';
const LOGIN='LOGIN'
const SIGNUP="SIGNUP"

const initialState = {
  login:'',
  password:''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      let {login,password}=action.payload

      
return{
...state,
login:login,
password:password
}
case SIGNUP:
  return state
    default:
      return state;
  }
};

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

export const loginThunk = (payload) => (dispatch) => {
  const {email,password}=payload
firebaseSignIn(email,password)
    dispatch(login(payload));
};

export const signUpThunk=(payload)=>(dispatch)=>{
  debugger
  const {email,password}=payload
  firebaseSignUp(email,password)

  dispatch(signUp)
}