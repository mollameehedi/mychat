// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATvjy-Y1AdPAzOfA7EnGQyMeTfZGKQ70M",
  authDomain: "mychat-8ec0d.firebaseapp.com",
  projectId: "mychat-8ec0d",
  storageBucket: "mychat-8ec0d.appspot.com",
  messagingSenderId: "532474796848",
  appId: "1:532474796848:web:d3ce645d895aa8fcd806f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;