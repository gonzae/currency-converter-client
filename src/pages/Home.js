import React, { PureComponent } from "react";
import "./Home.css";

import { SearchInput } from "../components/SearchInput";
import { AmountInput } from "../components/AmountInput";
import { SearchResultList } from "../components/SearchResultList";
import { CountryExchangeList } from "../components/CountryExchangeList";

import withCountryService from "../hocs/with-country-service";

class HomePage extends PureComponent {
  state = { searchResults: [], countryExchangeList: [], amount: 1 };

  constructor(props) {
    super(props);

    this.countryService = this.props.countryService;
  }

  _handleSearchCountries = async (needle) => {
    return this.countryService.search(needle);
  };

  _handleResults = (searchResults) => {
    this.setState({ searchResults });
  };

  _handleItemSelected = (countryName) => {
    const country = this.countryService.get(countryName);
    const item = {
      name: country.name,
      currencies: country.currencies,
    };

    const countryExchangeList = [...this.state.countryExchangeList, item];
    this.setState({ countryExchangeList });
  };

  _handleAmountChanged = (amount) => {
    this.setState({ amount });
  };

  render() {
    return (
      <content>
        <div className="columns">
          <div className="column">
            <div className="SearchInput-wrapper">
              <SearchInput
                searchCountries={this._handleSearchCountries}
                onResults={this._handleResults}
              />
            </div>
            {this.state.searchResults.length === 0 ? (
              ""
            ) : (
              <SearchResultList
                countries={this.state.searchResults}
                onSelect={this._handleItemSelected}
              />
            )}
          </div>
          <div className="column">
            <div className="AmountInput-wrapper">
              <AmountInput onValueChange={this._handleAmountChanged} />
            </div>
            {this.state.countryExchangeList.length > 0 ? (
              <CountryExchangeList
                items={this.state.countryExchangeList}
                amount={this.state.amount}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </content>
    );
  }
}

export default withCountryService(HomePage);
