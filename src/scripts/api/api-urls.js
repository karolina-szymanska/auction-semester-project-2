// base url
export const api_base_url = `https://api.noroff.dev/api/v1`;

// all active listings descending, including created by a registered user
export const allActiveListingsDescUrl = `${api_base_url}/auction/listings?sort=created&sortOrder=desc&_active=true`;

// all active listings, no sort order, including created by a registered user
export const allActiveListingsUrl = `${api_base_url}/auction/listings?sort=created&_active=true`;

// register user
export const registerUserUrl = `${api_base_url}/auction/auth/register`;

// login user
export const loginUserUrl = `${api_base_url}/auction/auth/login`;

// change avatar
export function sendAvatarUrl(name) {
  return `${api_base_url}/auction/profiles/${name}/media`;
}

// get profile
export function getProfileUrl(name) {
  return `${api_base_url}/auction/profiles/${name}?_listings=true`;
}

// get all listings by profile
export function getListingsByProfileUrl(name) {
  return `${api_base_url}/auction/profiles/${name}/listings?_seller=true&_bids=true&sort=created&sortOrder=desc&_active=true`;
}
