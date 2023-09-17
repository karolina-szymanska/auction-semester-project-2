import { allActiveListings } from "../api/api-urls.js";
import { displaySearchedListings } from "./displaySearchedListings.js";
const searchInput = document.querySelector("#search-input");
const statusContainer = document.querySelector("#status-container");
const listingsContainer = document.querySelector("#listings-container");

export async function searchListings(url) {
  const results = await fetch(allActiveListings);
  const allListings = await results.json();
  //   console.log(allListings);

  searchInput.addEventListener("input", (event) => {
    // console.log(event);
    // console.log(event.target.value);

    listingsContainer.innerHTML = "";
    let value = event.data.value;
    let filteredArray = [];

    for (let i = 0; i < allListings.length; i++) {
      let currentPost = allListings[i];

      if (
        currentPost.description.toLowerCase().includes(value.toLowerCase()) ||
        currentPost.title.toLowerCase().includes(value.toLowerCase())
      ) {
        filteredArray.push(currentPost);
        statusContainer.innerHTML = ``;
      } else if (filteredArray.length === 0) {
        statusContainer.innerHTML = `<p>It seems no item matches your search</p>`;
      }
    }
    displaySearchedListings(filteredArray);
  });
}

searchListings(allActiveListings);
