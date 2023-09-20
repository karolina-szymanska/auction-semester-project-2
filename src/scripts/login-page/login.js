import { clearLocalStorage } from "../clear-local-storage.js";
clearLocalStorage();

import { loginAuthUser } from "./login-api-call.js";
import { loginUserURL } from "../api/api-base-urls.js";

const loginForm = document.querySelector("#login-form");
const errorMessage = document.querySelector("#error-message");
errorMessage.style.display = "none";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Creates user object
  const myFormData = new FormData(event.target);
  const userToLoginObject = Object.fromEntries(myFormData.entries());

  // Logs in user in API
  loginAuthUser(loginUserURL, userToLoginObject);
});
