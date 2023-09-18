const searchInput = document.querySelector("#search-input");

import { latestListings, allActiveListings } from "../api/api-urls.js";
import { displayListingsUnlogged } from "../components/displayListingsUnlogged.js";
import { searchListings } from "../components/search.js";

async function getUnloggedListings(url1, url2) {
  try {
    const response = await fetch(url1);
    const latestListings = await response.json();
    displayListingsUnlogged(latestListings);
    // console.log(latestListings);

    const reply = await fetch(url2);
    const allListings = await reply.json();
    // console.log(allListings);

    searchInput.addEventListener("input", (event) => {
      const inputsLength = event.target.value.trim().length;
      // console.log(inputsLength);

      if (inputsLength > 0) {
        displayListingsUnlogged(allListings);
        // latestHeading.style.display = "none";
        // latestsButton.style.display = "none";
      } else {
        displayListingsUnlogged(latestListings);
        // latestHeading.style.display = "block";
        // latestsButton.style.display = "inline-block";
      }

      searchListings(allListings);
    });

    // displayListingsUnlogged(latestListings);
  } catch (error) {
    console.log(error);
  }
}

getUnloggedListings(latestListings, allActiveListings);
