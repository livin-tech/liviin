// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app" ;   
import { getAnalytics } from "firebase/analytics" ;   
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey : "AIzaSyDsUf_1EwN0DQgTApS1Y1fuWaJtx-KwKso" , 
  authDomain : "liviin-36465.firebaseapp.com" , 
  projectId : "liviin-36465" , 
  storageBucket : "liviin-36465.appspot.com" , 
  messagingSenderId : "518935595191" , 
  appId : "1:518935595191:web:b199edabfec6a57213e532" , 
  measurementId : "G-GJ31GDKYKQ" 
};

// Initialize Firebase
const app = initializeApp ( firebaseConfig );
const analytics = getAnalytics ( app );
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;