/*
  Just a simple config file for configs!
*/

// REACT_APP_API_HOST
const api = process.env.REACT_APP_API_HOST || "http://localhost:3001/api/v0";

// REACT_APP_BASE_CURRENCY
const baseCurrency = process.env.REACT_APP_BASE_CURRENCY || "SEK";

export default {
  api,
  baseCurrency,
};
