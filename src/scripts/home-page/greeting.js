function greetUser() {
  const greetContainer = document.querySelector("#greeting-container");
  const userToGreet = localStorage.getItem("name");

  greetContainer.innerHTML = `
  <span>Hello, ${userToGreet}</span>`;
}
greetUser();
