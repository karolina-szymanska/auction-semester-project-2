import card from "./cardUnregistered.js";

export function displayListingsUnlogged(listings) {
  const listingsContainer = document.querySelector("#listings-container");
  listingsContainer.innerHTML = "";

  listings.forEach(function (listing) {
    if (listing.media.length === 0) {
      listing.media = ["/assets/placeholders/placeholder.jpg"];
    }

    if (!listing.title) {
      listing.title = "Wonderful item";
    }

    listingsContainer.innerHTML += card(listing);
  });
}

// refreshing loops for myself as I didn´t remember forEach and rewrote for loop into forEach :)

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
