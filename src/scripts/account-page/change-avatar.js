const userName = localStorage.getItem("name");
import { setNewAvatar } from "./change-avatar-api-call.js";
import { sendAvatarUrl } from "../api/api-urls.js";
sendAvatarUrl(userName);

const changeAvatarForm = document.querySelector("#form-change-avatar");
const avatarUrlInput = document.querySelector("#avatar-media");
const changeAvatarButton = document.querySelector("#change-avatar-button");
const sendAvatarButton = docu.querySelector("#send-avatar-button");

changeAvatarButton.computedStyleMap.display = "inline-block";

changeAvatarButton.addEventListener("click", (showAvatarInput) => {
  changeAvatarButton.style.display = "none";
  avatarUrlInput.style.display = "block";
  sendAvatarButton.style.display = "inline-block";
});

changeAvatarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const avatarObject = { avatar: avatarUrlInput.value };
  setNewAvatar(sendAvatarUrl(userName), avatarObject);
});
