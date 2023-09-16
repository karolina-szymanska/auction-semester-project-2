// base url
export const api_base_url = "https://api.noroff.dev/api/v1";

// all active listings descending, including created by a registered user
export const allActiveListingsDesc =
  "${api_base_url}/auction/listings?sort=created&sortOrder=desc&_active=true";
