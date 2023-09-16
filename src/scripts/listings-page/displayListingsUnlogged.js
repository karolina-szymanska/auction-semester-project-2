import { allActiveListingsDesc } from "../api/api-urls.js";
import setLoader from "../components/loader.js";
const listingsContainer = document.querySelector("#listings-container");

async function displayListingsUnlogged(url) {
  listingsContainer.innerHTML = setLoader();

  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    results.forEach(function (result) {
      listingsContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card mb-5">
                <div class="card-header">id: ${result.id}</div>
                <div class="ratio ratio-4x3">
                    <img src="${result.media[0]}" class="card-img-center" alt="${result.title}"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${result.title}</h5>
                    <p class="card-text">Bids: ${result._count.bids}</p>
                </div>
            </div>
        </div>`;
    });

    // refreshing loops for myself as I didn´t remember forEach :)

    // for (let i = 0; i < results.length; i++) {
    //   listingsContainer.innerHTML += `
    //     <div class="col-12 col-md-6 col-lg-3">
    //         <div class="card mb-3">
    //             <div class="card-header">id: ${results[i].id}</div>
    //             <div class="ratio ratio-4x3">
    //                 <img src="${results[i].media[0]}" class="card-img-center" alt="${results[i].title}"/>
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">${results[i].title}</h5>
    //                 <p class="card-text">Bids: ${results[i]._count.bids}</p>
    //             </div>
    //         </div>
    //     </div>`;
    // }

    // if(results[i].media.length ===0) {
    //     results[i].media = ["/assets/placeholders/placeholder.jpg"];
    // };
  } catch (error) {
    console.log(error);
  }
}

displayListingsUnlogged(allActiveListingsDesc);
