import { clearLocalStorage } from "../components/clear-storage.js";
clearLocalStorage();

import { fetchMetdhods } from "../api/fetch-methods.js";
const { loginUser } = fetchMetdhods;

export async function loginAuthorizedUser(url, credentials) {
  try {
    loginUser.body = JSON.stringify(credentials);
    const response = await fetch(url, loginUser);
    const results = await response.json();
  } catch (error) {
    console.log(error);
  }
}
