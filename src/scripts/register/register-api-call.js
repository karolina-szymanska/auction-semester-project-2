import { registerUserUrl } from "../api/api-urls.js";
import { fetchMetdhods } from "../api/fetch-methods.js";
const { registerUser } = fetchMetdhods;

export async function registerNewUser(registerUrl, newUserObject) {
  try {
    registerUser.body = JSON.stringify(newUserObject);
    const response = await fetch(registerUserUrl, registerUser);
    const result = await response.json();
    // console.log(result);

    if (response.status !== 201) {
      const errorMessage = document.querySelector("#error-message");
      errorMessage.computedStyleMap.display = "block";
      errorMessage.innerHTML = `${result.errors[0].message}`;
    } else {
      location.href = "/register-success.html";
    }
  } catch (error) {
    console.log(error);
  }
}
