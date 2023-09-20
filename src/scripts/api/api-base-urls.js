// BASE URL
export const API_BASE_URL = `https://api.noroff.dev/api/v1`;

// Get all listings
export const allListingsLoggedOutURL = `${API_BASE_URL}/auction/listings?_seller=true&_bids=true&_active=true`;

// Get all listings DESC
export const allListingsDESC = `${API_BASE_URL}/auction/listings?_seller=true&_bids=true&sort=created&sortOrder=desc&_active=true`;

// Get all listings ASC
export const allListingsASC = `${API_BASE_URL}/auction/listings?_seller=true&_bids=true&sort=created&sortOrder=asc&_active=true`;

// Register user
export const registerUserURL = `${API_BASE_URL}/auction/auth/register`;

// Login user
export const loginUserURL = `${API_BASE_URL}/auction/auth/login`;

// Change user avatar
export function sendAvatarURL(name) {
  return `${API_BASE_URL}/auction/profiles/${name}/media`;
}

// Get profile
export function getProfileURL(name) {
  return `${API_BASE_URL}/auction/profiles/${name}?_listings=true`;
}

// Single listing
export function getListingURL(listingID) {
  return `${API_BASE_URL}/auction/listings/${listingID}?_seller=true&_bids=true`;
}

// Create entry
export const createEntryURL = `${API_BASE_URL}/auction/listings`;

// Update entry
export function updateEntryURL(itemID) {
  return `${API_BASE_URL}/auction/listings/${itemID}`;
}

// Delete entry
export function deleteEntryURL(itemID) {
  return `${API_BASE_URL}/auction/listings/${itemID}`;
}

// Get all listings by profile
export function getListingsByProfileURL(name) {
  return `${API_BASE_URL}/auction/profiles/${name}/listings?_seller=true&_bids=true&sort=created&sortOrder=desc&_active=true`;
}

// Send bid
export function sendBidURL(listingID) {
  return `${API_BASE_URL}/auction/listings/${listingID}/bids`;
}
