const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const itemID = urlParams.get("id");

import { getListingURL } from "../api/api-base-urls.js";
import { fetchMetdhods } from "../api/fetch-methods.js";
const { getListing } = fetchMetdhods;
import { prefillUpdateForm } from "./edit-item-prefill-form.js";
import { updateListingOnAPI } from "./edit-item-api-call-send.js";
import { deleteItem } from "./delete-item-button.js";

async function getItemInfo(url, method) {
  try {
    const response = await fetch(url, method);
    const json = await response.json();
    prefillUpdateForm(json);
    updateListingOnAPI(json);
    deleteItem(json);
  } catch (error) {
    console.log(error);
  }
}
getItemInfo(getListingURL(itemID), getListing);
