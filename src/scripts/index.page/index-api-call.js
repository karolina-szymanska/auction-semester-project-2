import { latestListings } from "../api/api-urls.js";
import { displayListingsUnlogged } from "../components/displayListingsUnlogged.js";

async function getUnloggedListings(url) {
  try {
    const response = await fetch(url);
    const listings = await response.json();
    console.log(listings);

    displayListingsUnlogged(listings);
  } catch (error) {
    console.log(error);
  }
}

getUnloggedListings(latestListings);
