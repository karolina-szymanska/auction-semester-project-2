// import { allActiveListingsDesc } from "../api/api-urls;";
import setLoader from "../components/loader.js";
const listingsContainer = document.querySelector("#listings-container");

function displayListingsUnlogged() {
  listingsContainer.innerHTML = setLoader();
}

displayListingsUnlogged();
