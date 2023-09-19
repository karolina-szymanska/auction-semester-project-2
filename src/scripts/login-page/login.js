import { clearLocalStorage } from "../components/clear-storage.js";
clearLocalStorage();

import { loginUserUrl } from "../api/api-urls.js";
import { loginAuthorizedUser } from "./login-api-call.js";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // create user object
  const myFormData = new FormData(event.target);
  const userToLoginObject = Object.fromEntries(myFormData.entries());

  // logs in to api
  loginAuthorizedUser(loginUserUrl, userToLoginObject);
});
