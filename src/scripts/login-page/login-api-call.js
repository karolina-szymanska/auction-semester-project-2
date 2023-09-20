import { clearLocalStorage } from "../components/clear-storage.js";
clearLocalStorage();

import { fetchMetdhods } from "../api/fetch-methods.js";
const { loginUser } = fetchMetdhods;

export async function loginAuthorizedUser(url, credentials) {
  try {
    loginUser.body = JSON.stringify(credentials);
    const response = await fetch(url, loginUser);
    const json = await response.json();

    if (response.status !== 200) {
      const errorMessage = document.querySelector("#error-message");
      errorMessage.style.display = "block";
      errorMessage.innerHTML = `${response.statusText}. Make sure you have registered <em>@stud.noroff.no</em> account and your password is 8-20 characters long.`;
    } else {
      errorMessage.style.display = "none";
      // add data to local storage
      localStorage.setItem("name", json.name);
      localStorage.setItem("email", json.email);
      localStorage.setItem("credits", json.credits);
      localStorage.setItem("avatar", json.avatar);
      localStorage.setItem("token", json.accessToken);

      location.href = "/account.html";
    }
  } catch (error) {
    console.log(error);
  }
}
