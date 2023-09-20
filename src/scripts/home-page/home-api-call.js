import { allListingsDESC } from "../api/api-base-urls.js";
import { fetchMetdhods } from "../api/fetch-methods.js";
const { getListing } = fetchMetdhods;
import { showEditorPicks } from "./editors-pick.js";
import { editorsChoiceArray } from "./editors-pick-array.js";
import { displayListingsHome } from "./display-listings.js";
import { searchListingsHome } from "./search-bar.js";
import { clearSearchFieldHome } from "./search-bar.js";

export async function fetchListings(url, method) {
  try {
    const response = await fetch(url, getListing);
    const allListings = await response.json();
    showEditorPicks(editorsChoiceArray);
    displayListingsHome(allListings);
    searchListingsHome(allListings);
    clearSearchFieldHome(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListings(allListingsDESC);
