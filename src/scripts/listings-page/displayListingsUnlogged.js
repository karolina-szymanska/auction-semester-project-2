import { allActiveListingsDesc } from "../api/api-urls.js";
import setLoader from "../components/loader.js";
const listingsContainer = document.querySelector("#listings-container");

async function displayListingsUnlogged(url) {
  listingsContainer.innerHTML = setLoader();

  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    for (let i = 0; i < results; i++) {
      listingsContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
                <div class="card-header">Offer number: 123456</div>
                <div class="ratio ratio-4x3">
                    <img src="${results[i].media[0]}" class="card-img-center" alt="${results[i].title}"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${results[i].title}</h5>
                    <p class="card-text">Bids: ${results[i].bids.length}</p>
                </div>
            </div>
        </div>`;
    }

    // if(results[i].media.length ===0) {
    //     results[i].media = ["/assets/placeholders/placeholder.jpg"];
    // };
  } catch (error) {
    console.log(error);
  }
}

displayListingsUnlogged(allActiveListingsDesc);
