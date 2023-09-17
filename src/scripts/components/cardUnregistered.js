export default function cardUnregistered(card) {
  return `<div class="col-12 col-md-6 col-lg-3">
                <div class="card mb-4">
                    <div class="card-header">id: ${card.id}</div>
                    <div class="ratio ratio-4x3">
                        <img src="${card.media[0]}" class="card-img-center" alt="${card.title}"/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">Bids: ${card._count.bids}</p>
                        <a href="/login.html">
                            <button type="button" class="btn btn-secondary">Bid Now</button>
                        </a>
                    </div>
                </div>
            </div>`;
}
