import { clearLocalStorage } from "../components/clear-storage.js";
clearLocalStorage();

import { registerNewUser } from "./register-api-call.js";
import { registerUserUrl } from "../api/api-urls.js";

const registerForm = document.querySelector("#registerform");
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
