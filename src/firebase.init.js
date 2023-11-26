
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWamE-g5sLkH6q7ap5v7vXwJDHXyOWfUQ",
  authDomain: "twitter-c388b.firebaseapp.com",
  projectId: "twitter-c388b",
  storageBucket: "twitter-c388b.appspot.com",
  messagingSenderId: "501672457393",
  appId: "1:501672457393:web:16578b067631641dda5e90",
  measurementId: "G-YQ103YS4HL"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  const auth = getAuth(app);
export default auth;