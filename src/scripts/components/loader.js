// returns html for a spinner with bootstrap classes

export default function setLoader() {
  return `<div class="spinner">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
}
