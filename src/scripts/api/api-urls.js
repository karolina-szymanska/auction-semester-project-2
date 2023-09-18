// base url
export const api_base_url = `https://api.noroff.dev/api/v1`;

// 4 latest listings from the index page, including created by a registered user
export const latestListingsUrl = `${api_base_url}/auction/listings?sort=created&sortOrder=desc&limit=4&_active=true`;

// all active listings descending, including created by a registered user
export const allActiveListingsDescUrl = `${api_base_url}/auction/listings?sort=created&sortOrder=desc&_active=true`;

// all active listings, no sort order, including created by a registered user
export const allActiveListingsUrl = `${api_base_url}/auction/listings?sort=created&_active=true`;

// register user
export const registerUserUrl = `${api_base_url}/auction/auth/register`;
