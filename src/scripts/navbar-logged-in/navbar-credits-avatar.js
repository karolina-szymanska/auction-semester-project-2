function loadUserAvatar() {
  const avatarNavURLContainer = document.querySelector("#avatar-nav");
  const avatarNavURL = localStorage.getItem("avatar");
  avatarNavURLContainer.src = avatarNavURL;

  if (avatarNavURL === "null") {
    avatarNavURLContainer.src = "/assets/placeholders/avatar.png";
  }
}

loadUserAvatar();

import { getProfileUrl } from "../api/api-urls.js";
import { fetchMethods } from "../api/fetch-methods.js";

export async function loadUserCredits() {
  try {
    const userName = localStorage.getItem("name");
    const { getProfile } = fetchMethods;
    const response = await fetch(getProfileUrl(userName), getProfile);
    const json = await response.json();
    const userCreditsContainer = document.querySelector(
      "#user-credits-container"
    );
    userCreditsContainer.innerHTML = `${json.credits}`;

    // credits to localStorage
    localStorage.setItem("credits", json.credits);
  } catch (error) {
    console.log(error);
  }
}

loadUserCredits();
