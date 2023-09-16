// returns html for a spinner with bootstrap classes

export function setLoader() {
  return `<div class="spinner">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
}
