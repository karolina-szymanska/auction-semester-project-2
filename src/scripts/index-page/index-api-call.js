import { clearLocalStorage } from "../clear-Storage.js";
clearLocalStorage();

import { latestListings, allActiveListings } from "../api/api-urls.js";
import { displayListingsUnlogged } from "../components/displayListingsUnlogged.js";
import { searchListings } from "../components/search.js";
const searchInput = document.querySelector("#search-input");

async function getUnloggedListings(url1, url2) {
  try {
    const response = await fetch(url1);
    const latestListings = await response.json();
    // console.log(latestListings);
    displayListingsUnlogged(latestListings);

    const reply = await fetch(url2);
    const allListings = await reply.json();
    // console.log(allListings);

    searchInput.addEventListener("input", (event) => {
      const inputsLength = event.target.value.trim().length;
      // console.log(inputsLength);

      if (inputsLength > 0) {
        displayListingsUnlogged(allListings);
      } else {
        displayListingsUnlogged(latestListings);
      }

      searchListings(allListings);
    });

    // displayListingsUnlogged(latestListings);
  } catch (error) {
    console.log(error);
  }
}

getUnloggedListings(latestListings, allActiveListings);
