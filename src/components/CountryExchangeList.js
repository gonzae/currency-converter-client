import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { CountryExchange } from "./CountryExchange";

export class CountryExchangeList extends PureComponent {
  static propTypes = {
    items: PropTypes.array,
    amount: PropTypes.number,
  };

  static defaultProps = {
    items: [],
    amount: 1,
  };

  render() {
    const { items, amount } = this.props;

    return (
      <div className="CountryExchangeList">
        {items.map((item, idx) => {
          return (
            <div key={idx} className="CountryExchangeList-item">
              <CountryExchange
                amount={amount}
                country={item.name}
                currencies={item.currencies}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
