const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const listingID = urlParams.get("id");

import { sendBidURL } from "../api/api-base-urls.js";
const bidItemURL = sendBidURL(listingID);

import { fetchMetdhods } from "../api/fetch-methods.js";
const { sendBidMethod } = fetchMetdhods;

import { sendBidToAPI } from "./add-bid-api-call.js";

const bidButton = document.querySelector("#bid-button");
const bidAmount = document.querySelector("#bid-amount");

bidButton.addEventListener("click", (event) => {
  event.preventDefault();
  sendBidMethod.body = JSON.stringify({
    amount: bidAmount.valueAsNumber,
  });
  sendBidToAPI(sendBidURL(listingID), sendBidMethod);
});
