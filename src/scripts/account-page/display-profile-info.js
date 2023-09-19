const userName = localStorage.getItem("name");
const userAvatar = localStorage.getItem("avatar");
const userEmail = localStorage.getItem("email");
const userCredits = localStorage.getItem("credits");

function showUserAvatar() {
  const userAvatarContainer = document.querySelector("#user-avatar-container");

  if (userAvatar === "null") {
    userAvatarContainer.style.backgroundImage = url(
      "/assets/placeholders/avatar.png"
    );
  } else {
    userAvatarContainer.style.backgroundImage = url("${userAvatar}");
  }
}

showUserAvatar();

function showUserInfo() {
  const userProfileInfo = document.querySelector("#user-profile-info");
  userProfileInfo.innerHTML = `
    <p class="text-center" id="user-name"><b>Name: </b>${userName}</p>
    <p class="text-center" id="user-email"><b>Email: </b>${userEmail}</p>  
    <p class="text-center" id="user-credits"><b>Credits: </b>${userCredits}</p>`;
}

showUserInfo();

function redirectIfLoggedOut() {
  if (!userName) {
    location.href = "/.index.html";
  }
}

redirectIfLoggedOut();
