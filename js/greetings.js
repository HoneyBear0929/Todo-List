const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greetings = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintgreetings();
}

function paintgreetings(username) {
  greetings.innerText = `Hello ${username}`;
  greetings.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else { 
  paintgreetings(savedUsername);
  // show the greetings
}
