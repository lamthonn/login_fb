import { initializeApp } from "firebase/app" ;   

const firebaseConfig = {
  apiKey: "AIzaSyDqdE-OjsaqIrwlChMByGhfACS4_Z26-6U",
  authDomain: "login-fb-7aa20.firebaseapp.com",
  projectId: "login-fb-7aa20",
  storageBucket: "login-fb-7aa20.appspot.com",
  messagingSenderId: "513836940696",
  appId: "1:513836940696:web:2d73709af5c6eefb09bfed",
  measurementId: "G-P4PN4ZHYZZ"
};

  const firebaseApp = initializeApp(firebaseConfig);
  export default firebaseApp;