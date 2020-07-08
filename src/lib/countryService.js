import config from "../config";

export default class CountryService {
  constructor() {
    this._api = config.api;
    this._cache = {};
    this._searchHistory = [];
    this._token = null;
  }

  async _auth() {
    const res = await fetch(`${this._api}/login`, { method: "POST" });
    const data = await res.json();
    this._token = data.token;
  }

  get(fullName) {
    return this._cache[fullName.toLowerCase()];
  }

  async search(needle) {
    if (!this._alreadySearched(needle)) await this._fetchForNeedle(needle);

    return this._searchFromCache(needle);
  }

  // Should be already there if needle is in our records
  // or a record is a substring of needle (what we are searching is even more specific than
  // what we already have in our history and cache)
  _alreadySearched(needle) {
    return this._searchHistory.some((search) => {
      return needle.includes(search.toLowerCase());
    });
  }

  async _fetchForNeedle(needle) {
    if (!this._token) await this._auth();

    const res = await fetch(`${this._api}/countries/${needle}`, {
      headers: new Headers({
        Authorization: `Bearer ${this._token}`,
      }),
    });
    const data = await res.json();

    // store this search on history
    this._searchHistory = [...this._searchHistory, needle.toLowerCase()];

    const results = data.countries;
    if (data.countries.length > 0) this._storeInCache(results);
  }

  _storeInCache(countries) {
    countries.forEach((country) => {
      this._cache[country.name.toLowerCase()] = country;
    });
  }

  _searchFromCache(needle) {
    const keys = Object.keys(this._cache);
    const filtered = keys.filter((countryName) => {
      return countryName.includes(needle.toLowerCase());
    });

    const res = filtered.map((countryName) => {
      return this._cache[countryName];
    });

    return res;
  }
}
