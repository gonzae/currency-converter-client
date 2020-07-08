import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import config from "../config";

const baseCurrency = config.baseCurrency;

export class CountryExchange extends PureComponent {
  static propTypes = {
    country: PropTypes.string,
    currencies: PropTypes.array,
    amount: PropTypes.number,
  };

  static defaultProps = {
    country: "",
    currencies: [],
    amount: 1,
  };

  _onClick = () => {
    this.props.onSelect(this.props);
  };

  render() {
    const { country, currencies, amount } = this.props;

    return (
      <div className="CountryExchange card">
        <header className="card-header">
          <p className="card-header-title">{country}</p>
        </header>
        <div className="card-content">
          <div className="content">
            {currencies.map((currency) => {
              return (
                <p key={currency.code}>
                  <strong>
                    {amount} {baseCurrency}
                  </strong>{" "}
                  is{" "}
                  <strong>
                    {currency.symbol}
                    {(amount * currency.rate).toFixed(2)} ({currency.code})
                  </strong>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
