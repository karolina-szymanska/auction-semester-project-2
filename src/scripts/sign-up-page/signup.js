import { clearLocalStorage } from "../clear-local-storage.js";
clearLocalStorage();

import { registerNewUser } from "./signup-api-call.js";
import { registerUserURL } from "../api/api-base-urls.js";

const signUpForm = document.querySelector("#signupform");
const errorMessage = document.querySelector("#error-message");
errorMessage.style.display = "none";

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Create object from form input fields
  const myFormData = new FormData(event.target);
  const newUserObject = Object.fromEntries(myFormData.entries());

  // Register new user in API
  registerNewUser(registerUserURL, newUserObject);
});
