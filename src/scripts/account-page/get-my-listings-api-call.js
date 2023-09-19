import { displayMyListings } from "./get-my-listings-display.js";

import { getListingsByProfileUrl } from "../api/api-base-urls.js";
const userName = localStorage.getItem("name");
const myListingsURL = getListingsByProfileUrl(userName);

import { fetchMetdhods } from "../api/fetch-methods.js";
const { getListings } = fetchMetdhods;

async function getMyListings() {
  try {
    const response = await fetch(myListingsUrl, getListings);
    const json = await response.json();
    displayMyListings(json);
  } catch (error) {
    console.log(error);
  }
}
getMyListings();
