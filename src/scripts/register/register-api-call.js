import { registerUserUrl } from "../api/api-urls.js";
import { fetchMetdhods } from "../api/fetch-methods.js";
const { registerUser } = fetchMetdhods;

export async function registerNewUser(registerUrl, newUserObject) {
  try {
    registerUser.body = JSON.stringify(newUserObject);
    const response = await fetch(registerUserUrl, registerUser);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
