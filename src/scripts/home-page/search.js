import { allActiveListingsDescUrl } from "../api/api-base-urls.js";
import { fetchMetdhods } from "../api/fetch-methods.js";
const { getListing } = fetchMetdhods;
import { displayListingsHome } from "./display-listings.js";
import { searchListingsHome } from "./search.js";

export async function fetchListings(url, method) {
  try {
    const response = await fetch(url, getListing);
    const allListings = await response.json();
    displayListingsHome(allListings);
    searchListingsHome(allListings);
  } catch (error) {
    console.log(error);
  }
}
fetchListings(allActiveListingsDescUrl);
