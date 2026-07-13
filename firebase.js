// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWGu5T5nA0ezBr3LpjGdmv1i3WTe5lq-c",
  authDomain: "playpredikt.firebaseapp.com",
  projectId: "playpredikt",
  storageBucket: "playpredikt.appspot.com",
  messagingSenderId: "868959799296",
  appId: "1:868959799296:web:98aa00df805f482eb0f0e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };