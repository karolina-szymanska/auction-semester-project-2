import card from "./cardUnregistered.js";

export function displaySearchedListings(allListings) {
  const listingsContainer = document.querySelector("#listings-container");

  allListings.forEach(function (listing) {
    if (listing.media.length === 0) {
      listing.media = ["/assets/placeholders/placeholder.jpg"];
    }

    if (!listing.title) {
      listing.title = "Wonderful item";
    }

    listingsContainer.innerHTML += card(listing);
  });
}
