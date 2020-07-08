import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class SearchResult extends PureComponent {
  static propTypes = {
    flag: PropTypes.string,
    name: PropTypes.string,
    population: PropTypes.number,
    currencies: PropTypes.array,
    onClick: PropTypes.func,
  };

  render() {
    const { flag, name, population, currencies } = this.props;

    return (
      <div className="SearchResult card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={flag} alt="Flag placeholder" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>
          <div className="content">
            <p>Population: {population} pop.</p>
            <p>
              {currencies.length === 1 ? "Currency" : "Currencies"}:{" "}
              {currencies.map((c) => c.code).join(", ")}.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
