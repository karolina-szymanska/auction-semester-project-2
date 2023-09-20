import { registerUserURL } from "../api/api-base-urls.mjs";
import { fetchMetdhods } from "../api/fetch-methods.mjs";
const { registerUser } = fetchMetdhods;

export async function registerNewUser(registerURL, newUserObject) {
  try {
    registerUser.body = JSON.stringify(newUserObject);
    const response = await fetch(registerUserURL, registerUser);
    const json = await response.json();

    if (response.status !== 201) {
      const errorMessage = document.querySelector("#error-message");
      errorMessage.style.display = "block";
      errorMessage.innerHTML = `${json.errors[0].message}`;
    } else {
      location.href = "/login-newly-registered.html";
    }
  } catch (error) {
    console.log(error);
  }
}
