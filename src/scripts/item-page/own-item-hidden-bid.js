export function showEditButton(itemInfo) {
  const dynamicSection = document.querySelector("#place-your-bid-section");
  dynamicSection.classList.remove("bg-info", "my-5");
  dynamicSection.innerHTML = `
          <a href="#"><button type="button" class="btn btn-primary mt-1 mb-5" style="width: 100%" id="edit-item-button"><strong>Edit item</strong></button></a>
      `;
  const editItemButton = document.querySelector("#edit-item-button");

  editItemButton.addEventListener("click", () => {
    location.href = `/item-edit.html?id=${itemInfo.id}`;
  });
}
