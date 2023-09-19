import { fetchMethods } from "../api/fetch-methods.js";
const { updateAvatarOption } = fetchMethods;

export async function setNewAvatar(url, avatarObject) {
  try {
    updateAvatarOption.body = JSON.stringify(avatarObject);
    const response = await fetch(url, updateAvatarOption);
    const json = await response.json();
    localStorage.setItem("avatar", json.avatar);
    location.href = "/account.html";
  } catch (error) {
    console.log(error);
  }
}
