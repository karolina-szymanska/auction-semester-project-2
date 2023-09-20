import { clearLocalStorage } from "../clear-local-storage.js";
clearLocalStorage();

import { allListingsDESC } from "../api/api-base-urls.js";
import { displayListingsLoggedOut } from "./display-listings-logged-out.js";
import { searchListings } from "./search-bar.js";
import { clearSearchField } from "./search-bar.js";

export async function fetchListingsLoggedOut(url) {
  try {
    const response = await fetch(url);
    const allListings = await response.json();

    displayListingsLoggedOut(allListings);
    searchListings(allListings);
    clearSearchField(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListingsLoggedOut(allListingsDESC);
