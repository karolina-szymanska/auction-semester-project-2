const searchInput = document.querySelector("#search-input");
const statusContainer = document.querySelector("#status-container");
const latestHeading = document.querySelector("#latest-auctions-heading");
const latestsButton = document.querySelector("#latest-auctions-button");
import { displayListingsUnlogged } from "./displayListingsUnlogged.js";

export function searchListings(listings) {
  searchInput.addEventListener("input", (event) => {
    const searchedValue = event.target.value.trim().toLowerCase();
    // console.log(searchedValue);

    const filteredListings = listings.filter(function (listing) {
      if (
        (listing.title &&
          listing.title.toLowerCase().includes(searchedValue)) ||
        (listing.description &&
          listing.description.toLowerCase().includes(searchedValue))
      ) {
        return true;
      }
    });

    if (filteredListings.length === 0) {
      statusContainer.innerHTML = `<p>It seems no item matches your search</p>`;
      latestHeading.style.display = "none";
      latestsButton.style.display = "none";
    } else if (filteredListings.length > 0) {
      statusContainer.innerHTML = ``;
      latestHeading.style.display = "none";
      latestsButton.style.display = "inline-block";
    }

    displayListingsUnlogged(filteredListings);
  });
}
