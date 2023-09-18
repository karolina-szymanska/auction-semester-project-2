import { allActiveListingsDescUrl } from "../api/api-urls.js";
import { displayListingsUnlogged } from "../components/displayListingsUnlogged.js";
import { errorHtml } from "../components/error.js";
const listingsContainer = document.querySelector("#listings-container");

async function getUnloggedListings(url) {
  try {
    const response = await fetch(url);
    const listings = await response.json();
    // console.log(listings);

    displayListingsUnlogged(listings);
  } catch (error) {
    console.log(error);
    listingsContainer.innerHTML = errorHtml(
      "An error occured. Please wait a while and try again."
    );
  }
}

getUnloggedListings(allActiveListingsDescUrl);
