// Get the item ID via the query string from the previous page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const itemID = urlParams.get("id");

// import the URL for the API call
import { getListingURL } from "../api/api-base-urls.js";
const listingURL = getListingURL(itemID);

// import the fetch option method
import { fetchMetdhods } from "../api/fetch-methods.js";
const { getListing } = fetchMetdhods;

// import the function to create the gallery
import { createGallery } from "./gallery.js";

// import the function to display the item name and details
import { displayItemInfo } from "./info.js";

// import function to display bids
import { displayBids } from "./bids.js";

// doing the API call
export async function getGalleryImages(listingURL) {
  try {
    const response = await fetch(listingURL, getListing);
    const json = await response.json();
    createGallery(json);
    displayItemInfo(json);
    displayBids(json.bids);
  } catch (error) {
    console.log(error);
  }
}
getGalleryImages(listingURL);
