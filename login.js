import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

alert("login.js loaded");

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  alert("Login button clicked");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful!");
    window.location.href = "index.html";
  } catch (error) {
    alert(error.code + "\n" + error.message);
  }
});