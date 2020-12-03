import firebase from "firebase"



export const firebaseInitial=()=>{
    debugger
const firebaseConfig = {
    apiKey: "AIzaSyAp7HsZM5ORnA5457n56FjhGyZxXFIf0Xs",
    authDomain: "e-market-3f299.firebaseapp.com",
    databaseURL: "https://e-market-3f299.firebaseio.com",
    projectId: "e-market-3f299",
    storageBucket: "e-market-3f299.appspot.com",
    messagingSenderId: "279458501840",
    appId: "1:279458501840:web:9d3c214ce908ec5461fad5",
    measurementId: "G-6C2588XXKH"
  };

firebase.initializeApp(firebaseConfig);
}
export const firebaseSignUp=(email,password)=>{
    debugger
    try {
       return  firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage);
    }
    
     }

     export const  firebaseSignIn= (email,password)=>{
       
        try {
             return  firebase.auth().signInWithEmailAndPassword(email, password);
         } catch (error) {
             // Handle Errors here.
             var errorMessage = error.message;
             alert(errorMessage);
         }};

export const firebaseSignOut=()=>{ try{
         return firebase.auth().signOut()}
         catch(error) {
           let  errorMessage = error.message;
           alert(errorMessage);
          }}

