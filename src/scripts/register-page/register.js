import { clearLocalStorage } from "../components/clear-storage.js";
clearLocalStorage();

import { registerUserUrl } from "../api/api-urls.js";
import { registerNewUser } from "./register-api-call.js";

const registerForm = document.querySelector("#register-form");
// console.log(registerForm);

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event);

  // create object from form inputs
  const myFormData = new FormData(event.target);
  const newUserObject = Object.fromEntries(myFormData.entries());

  // register new user to the API
  registerNewUser(registerUserUrl, newUserObject);
});
