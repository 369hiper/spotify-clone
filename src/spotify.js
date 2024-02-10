// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// Step 1: Click the login button

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// Step 2: RedirectURI
const redirectUri = "http://localhost:3000";
const ClientId = "9c10ffab724b4f308bdc570e9624b44d";
const ClientSecret = "60b38ed7b29d43e395eacc2e5548737a";




export const loginUrl = `${authEndpoint}?client_id=${ClientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;